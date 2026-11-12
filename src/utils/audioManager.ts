/**
 * Gerenciador de Áudio MP3 do Anjo ACS
 * Sistema para reprodução de arquivos de áudio pré-gravados
 */

export interface AudioPlaybackState {
  isPlaying: boolean;
  audioPath: string | null;
  sourceId: string | null;
}

type AudioStateListener = (state: AudioPlaybackState) => void;

const INITIAL_STATE: AudioPlaybackState = {
  isPlaying: false,
  audioPath: null,
  sourceId: null,
};

let currentAudioPlayer: HTMLAudioElement | null = null;
let resolveCurrentAudio: (() => void) | null = null;
let currentState: AudioPlaybackState = { ...INITIAL_STATE };
const stateListeners = new Set<AudioStateListener>();

const emitAudioState = (nextState: AudioPlaybackState) => {
  currentState = nextState;
  stateListeners.forEach((listener) => listener(currentState));
};

/**
 * Atualiza o estado global de reprodução (usado também pelo fallback TTS)
 */
export const setAudioPlaybackState = (nextState: AudioPlaybackState) => {
  emitAudioState(nextState);
};

/**
 * Retorna o estado atual de reprodução de áudio
 */
export const getAudioPlaybackState = (): AudioPlaybackState => currentState;

/**
 * Inscreve um listener para receber atualizações do estado de reprodução
 * Retorna a função para cancelar a inscrição
 */
export const subscribeAudioState = (listener: AudioStateListener): (() => void) => {
  stateListeners.add(listener);
  listener(currentState);
  return () => {
    stateListeners.delete(listener);
  };
};

/**
 * Reproduz um arquivo de áudio MP3 e retorna uma Promise
 * A Promise resolve quando o áudio termina, é interrompido ou ocorre erro
 * @param audioPath - Caminho relativo ao /public/audios/
 * @param sourceId - Identificador opcional do componente/fluxo que iniciou a reprodução
 * @returns Promise que resolve quando áudio termina
 * @example await playAudio('confirmacao/entendi.mp3')
 */
export const playAudio = (audioPath: string, sourceId?: string): Promise<void> => {
  return new Promise((resolve) => {
    // Cancela áudio anterior e resolve sua Promise pendente
    stopAudio();

    const audioElement = new Audio(`/audios/${audioPath}`);
    const resolvedSourceId = sourceId ?? null;
    let settled = false;

    const finish = () => {
      if (!settled) {
        settled = true;
        if (resolveCurrentAudio === finish) {
          resolveCurrentAudio = null;
        }
        resolve();
      }
    };

    const resetIfCurrent = () => {
      if (currentAudioPlayer === audioElement) {
        currentAudioPlayer = null;
        emitAudioState({ ...INITIAL_STATE });
      }
      finish();
    };

    audioElement.addEventListener('play', () => {
      if (currentAudioPlayer === audioElement) {
        emitAudioState({
          isPlaying: true,
          audioPath,
          sourceId: resolvedSourceId,
        });
      } else {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    });

    audioElement.addEventListener('ended', resetIfCurrent);
    audioElement.addEventListener('pause', resetIfCurrent);

    audioElement.addEventListener('error', (e) => {
      console.error(`Erro ao reproduzir áudio: ${audioPath}`, e);
      resetIfCurrent();
    });

    currentAudioPlayer = audioElement;
    resolveCurrentAudio = finish;

    audioElement
      .play()
      .then(() => {
        if (currentAudioPlayer !== audioElement) {
          audioElement.pause();
          audioElement.currentTime = 0;
          finish();
        }
      })
      .catch((err) => {
        console.error(`Erro ao iniciar reprodução: ${audioPath}`, err);
        resetIfCurrent();
      });
  });
};

/**
 * Para a reprodução de áudio atual
 */
export const stopAudio = () => {
  const player = currentAudioPlayer;
  const pendingResolve = resolveCurrentAudio;

  currentAudioPlayer = null;
  resolveCurrentAudio = null;

  if (player) {
    player.pause();
    player.currentTime = 0;
  }

  if (currentState.isPlaying || player) {
    emitAudioState({ ...INITIAL_STATE });
  }

  pendingResolve?.();
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
