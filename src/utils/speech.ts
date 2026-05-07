import { speakText } from "@/services/ttsService";

export const speak = async (text: string) => {
  try {
    await speakText(text);
  } catch (error) {
    console.error("Erro ao gerar áudio:", error);
    // Fallback para speechSynthesis em caso de falha
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      window.speechSynthesis.speak(utterance);
    }
  }
};

export const stopSpeaking = () => {
  // A nova implementação gerencia o áudio automaticamente
  // Esta função pode ser expandida para parar áudios em andamento
};