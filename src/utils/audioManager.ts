/**
 * Gerenciador de Áudio MP3 do Anjo ACS
 * Sistema para reprodução de arquivos de áudio pré-gravados
 */

let currentAudioPlayer: HTMLAudioElement | null = null;
let onPlayingCallback: ((isPlaying: boolean) => void) | null = null;

/**
 * Define callback para atualizar estado de reprodução
 */
export const setAudioPlayingCallback = (callback: (isPlaying: boolean) => void) => {
  onPlayingCallback = callback;
};

/**
 * Reproduz um arquivo de áudio MP3 e retorna uma Promise
 * A Promise resolve quando o áudio termina ou ocorre erro
 * @param audioPath - Caminho relativo ao /public/audios/
 * @returns Promise que resolve quando áudio termina
 * @example await playAudio('confirmacao/entendi.mp3')
 */
export const playAudio = (audioPath: string): Promise<void> => {
  return new Promise((resolve) => {
    // Cancela áudio anterior
    stopAudio();

    const audioElement = new Audio(`/audios/${audioPath}`);
    
    audioElement.addEventListener('play', () => {
      onPlayingCallback?.(true);
    });

    audioElement.addEventListener('ended', () => {
      onPlayingCallback?.(false);
      currentAudioPlayer = null;
      resolve(); // Resolve quando áudio termina
    });

    audioElement.addEventListener('pause', () => {
      onPlayingCallback?.(false);
    });

    audioElement.addEventListener('error', (e) => {
      console.error(`Erro ao reproduzir áudio: ${audioPath}`, e);
      onPlayingCallback?.(false);
      currentAudioPlayer = null;
      resolve(); // Resolve também em caso de erro para não travar
    });

    currentAudioPlayer = audioElement;
    audioElement.play().catch(err => {
      console.error(`Erro ao iniciar reprodução: ${audioPath}`, err);
      onPlayingCallback?.(false);
      currentAudioPlayer = null;
      resolve(); // Resolve em caso de erro de play
    });
  });
};

/**
 * Para a reprodução de áudio
 */
export const stopAudio = () => {
  if (currentAudioPlayer) {
    currentAudioPlayer.pause();
    currentAudioPlayer.currentTime = 0;
    currentAudioPlayer = null;
    onPlayingCallback?.(false);
  }
};

/**
 * Verifica se há áudio em reprodução
 */
export const isAudioPlaying = (): boolean => {
  return currentAudioPlayer !== null && !currentAudioPlayer.paused;
};

/**
 * Retorna duração do áudio em milissegundos (estimativa)
 * Se o arquivo não existir, retorna uma estimativa baseada em caracteres
 */
export const getAudioDuration = (textLength: number): number => {
  // Estimativa: 80ms por caractere (aproximadamente 150 caracteres por minuto)
  return textLength * 80;
};
