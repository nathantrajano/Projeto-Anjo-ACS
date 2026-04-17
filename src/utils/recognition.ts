/**
 * Utilitário de Reconhecimento de Fala
 */

export const getSpeechRecognition = () => {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';
  // continuous: true garante que o motor não pare ao detectar o primeiro silêncio
  recognition.continuous = true;
  recognition.interimResults = true;

  return recognition;
};