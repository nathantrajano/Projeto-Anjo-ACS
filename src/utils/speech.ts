/**
 * Motor de Áudio do Anjo ACS
 * Sistema que usa arquivos MP3 pré-gravados em vez de síntese de fala
 * com fallback para SpeechSynthesis (TTS) quando o áudio MP3 não existe
 */

import {
  playAudio,
  stopAudio,
  setAudioPlaybackState,
  getAudioPlaybackState,
} from './audioManager';
import { getAudioPath } from './audioMappings';

let ttsSessionId = 0;
let resolveCurrentTTS: (() => void) | null = null;

/**
 * Reproduz o áudio correspondente ao texto (síncrono/fire-and-forget)
 */
export const speak = (text: string, sourceId?: string) => {
  speakAsync(text, sourceId);
};

/**
 * Reproduz o áudio correspondente ao texto e retorna uma Promise
 * Resolve quando o MP3 ou o TTS termina de falar
 */
export const speakAsync = (text: string, sourceId?: string): Promise<void> => {
  const audioPath = getAudioPath(text);

  if (audioPath) {
    cancelActiveTTS();
    return playAudio(audioPath, sourceId);
  } else {
    console.warn(`[Audio] Nenhum MP3 mapeado para: "${text.substring(0, 40)}...". Usando TTS como fallback.`);
    return speakTTSWithPromise(text, sourceId);
  }
};

const cancelActiveTTS = () => {
  ttsSessionId += 1;
  const pendingResolve = resolveCurrentTTS;
  resolveCurrentTTS = null;

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  pendingResolve?.();
};

/**
 * Fallback para síntese de fala (TTS) retornando Promise
 */
const speakTTSWithPromise = (text: string, sourceId?: string): Promise<void> => {
  return new Promise((resolve) => {
    stopAudio();
    cancelActiveTTS();

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve();
      return;
    }

    const sessionId = ++ttsSessionId;
    const resolvedSourceId = sourceId ?? null;
    let settled = false;

    const finish = () => {
      if (!settled) {
        settled = true;
        if (resolveCurrentTTS === finish) {
          resolveCurrentTTS = null;
        }
        if (ttsSessionId === sessionId) {
          setAudioPlaybackState({
            isPlaying: false,
            audioPath: null,
            sourceId: null,
          });
        }
        resolve();
      }
    };

    const utterance = new SpeechSynthesisUtterance(text);

    // Tenta encontrar uma voz em Português do Brasil
    const voices = window.speechSynthesis.getVoices();
    const ptBRVoice = voices.find((v) => v.lang === 'pt-BR' || v.lang === 'pt_BR');

    if (ptBRVoice) {
      utterance.voice = ptBRVoice;
    }

    utterance.lang = 'pt-BR';
    utterance.rate = 1.0;
    utterance.pitch = 1.1;

    utterance.onend = finish;
    utterance.onerror = finish;

    resolveCurrentTTS = finish;
    setAudioPlaybackState({
      isPlaying: true,
      audioPath: null,
      sourceId: resolvedSourceId,
    });

    window.speechSynthesis.speak(utterance);
  });
};

/**
 * Para a reprodução de áudio ou TTS
 */
export const stopSpeaking = () => {
  cancelActiveTTS();
  stopAudio();
};

/**
 * Para a reprodução apenas se ela tiver sido iniciada pelo sourceId informado
 */
export const stopSpeakingIfSource = (sourceId: string) => {
  const state = getAudioPlaybackState();
  if (state.isPlaying && state.sourceId === sourceId) {
    stopSpeaking();
  }
};

let lifecycleListenersRegistered = false;

const registerAudioLifecycleListeners = () => {
  if (lifecycleListenersRegistered || typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  lifecycleListenersRegistered = true;

  const handleVisibilityChange = () => {
    if (document.hidden) {
      stopSpeaking();
    }
  };

  window.addEventListener('pagehide', stopSpeaking);
  document.addEventListener('visibilitychange', handleVisibilityChange);
};

registerAudioLifecycleListeners();
