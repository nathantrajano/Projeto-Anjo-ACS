/**
 * Motor de Áudio do Anjo ACS
 * Sistema que usa arquivos MP3 em vez de síntese de fala
 */

import { playAudio, stopAudio } from './audioManager';
import { getAudioPath } from './audioMappings';

/**
 * Reproduz o áudio correspondente ao texto
 * Se não houver mapeamento, tenta TTS como fallback
 */
export const speak = (text: string) => {
  // Tenta encontrar o arquivo de áudio mapeado
  const audioPath = getAudioPath(text);
  
  if (audioPath) {
    playAudio(audioPath);
  } else {
    // Fallback para TTS se não houver áudio mapeado
    console.warn(`Nenhum áudio mapeado para: "${text}". Usando TTS como fallback.`);
    fallbackToTTS(text);
  }
};

/**
 * Fallback para síntese de fala (TTS) quando não há áudio mapeado
 */
const fallbackToTTS = (text: string) => {
  if (!('speechSynthesis' in window)) return;

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
  utterance.pitch = 1.1; // Tom levemente amigável

  window.speechSynthesis.speak(utterance);
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