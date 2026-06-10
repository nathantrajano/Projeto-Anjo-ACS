/**
 * Motor de Voz do Anjo ACS
 */

export const speak = (text: string) => {
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

export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};