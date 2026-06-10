/**
 * Motor de Áudio do Anjo ACS - Customizado para MP3
 */

// MP3 padrão amigável (um som de meditação/relaxamento instrumental curto)
const DEFAULT_MP3 = "https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav"; 

export const getCustomMp3Url = (): string => {
  return localStorage.getItem("custom_mp3_url") || DEFAULT_MP3;
};

export const setCustomMp3Url = (url: string) => {
  localStorage.setItem("custom_mp3_url", url);
};

let currentAudio: HTMLAudioElement | null = null;

export const speak = (text: string) => {
  // Para qualquer áudio que esteja tocando no momento
  stopSpeaking();

  const url = getCustomMp3Url();
  
  try {
    currentAudio = new Audio(url);
    currentAudio.play().catch(err => {
      console.warn("Erro ao reproduzir o MP3. Verifique se a URL é válida e pública:", err);
    });
  } catch (error) {
    console.error("Erro ao inicializar o áudio:", error);
  }
};

export const stopSpeaking = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
};