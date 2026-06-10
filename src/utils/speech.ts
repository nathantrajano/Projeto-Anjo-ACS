/**
 * Motor de Voz do Anjo ACS - Reprodução de MP3 correspondente ao texto
 */

let currentAudio: HTMLAudioElement | null = null;
let onEndedCallback: (() => void) | null = null;

export const speak = (text: string, onEnded?: () => void) => {
  // Interrompe qualquer áudio que esteja tocando no momento
  stopSpeaking();

  try {
    // Geramos a URL do arquivo MP3 correspondente ao texto usando o serviço de TTS (retorna um MP3 real)
    const encodedText = encodeURIComponent(text.substring(0, 250)); // Limite seguro de caracteres
    const mp3Url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=pt-BR&client=tw-ob&q=${encodedText}`;
    
    currentAudio = new Audio(mp3Url);
    
    if (onEnded) {
      onEndedCallback = onEnded;
      currentAudio.addEventListener('ended', () => {
        onEnded();
        onEndedCallback = null;
      });
    }

    currentAudio.play().catch(err => {
      console.warn("Erro ao reproduzir o arquivo MP3:", err);
      if (onEnded) onEnded();
    });
  } catch (error) {
    console.error("Erro ao inicializar o áudio MP3:", error);
    if (onEnded) onEnded();
  }
};

export const stopSpeaking = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (onEndedCallback) {
    onEndedCallback();
    onEndedCallback = null;
  }
};