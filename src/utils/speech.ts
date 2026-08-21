/**
 * Motor de Áudio do Anjo ACS
 * Sistema que usa arquivos MP3 pré-gravados em vez de síntese de fala
 * com fallback para SpeechSynthesis (TTS) quando o áudio MP3 não existe
 */

import { playAudio, stopAudio } from './audioManager';
import { getAudioPath } from './audioMappings';

/**
 * Reproduz o áudio correspondente ao texto (síncrono/fire-and-forget)
 */
export const speak = (text: string) => {
  speakAsync(text);
};

/**
 * Reproduz o áudio correspondente ao texto e retorna uma Promise
 * Resolve quando o MP3 ou o TTS termina de falar
 */
export const speakAsync = (text: string): Promise<void> => {
  const audioPath = getAudioPath(text);
  
  if (audioPath) {
    return playAudio(audioPath);
  } else {
    console.warn(`[Audio] Nenhum MP3 mapeado para: "${text.substring(0, 40)}...". Usando TTS como fallback.`);
    return speakTTSWithPromise(text);
  }
};

/**
 * Fallback para síntese de fala (TTS) retornando Promise
 */
const speakTTSWithPromise = (text: string): Promise<void> => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      resolve();
      return;
    }

    // Cancela falas anteriores para não encavalar
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Tenta encontrar uma voz em Português do Brasil
    const voices = window.speechSynthesis.getVoices();
    const ptBRVoice = voices.find(v => v.lang === 'pt-BR' || v.lang === 'pt_BR');

    if (ptBRVoice) {
      utterance.voice = ptBRVoice;
    }

    utterance.lang = 'pt-BR';
    utterance.rate = 1.0; 
    utterance.pitch = 1.1;

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();

    window.speechSynthesis.speak(utterance);
  });
};

/**
 * Para a reprodução de áudio ou TTS
 */
export const stopSpeaking = () => {
  // Para áudio MP3
  stopAudio();
  
  // Para TTS se estiver ativo
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};