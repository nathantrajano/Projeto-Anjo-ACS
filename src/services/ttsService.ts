interface TTSResponse {
  audioBlob: Blob;
  audioUrl: string;
}

export const speakText = async (text: string): Promise<TTSResponse> => {
  try {
    const response = await fetch("/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Erro TTS: ${response.status}`);
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);

    return { audioBlob, audioUrl };
  } catch (error) {
    console.error("Erro ao gerar áudio:", error);
    throw new Error("Não foi possível gerar o áudio. Tente novamente.");
  }
};

export const playAudio = (audioUrl: string): HTMLAudioElement => {
  const audio = new Audio(audioUrl);
  audio.play().catch(err => {
    console.error("Erro ao reproduzir áudio:", err);
    throw new Error("Não foi possível reproduzir o áudio.");
  });
  return audio;
};

export const stopAudio = (audio: HTMLAudioElement) => {
  audio.pause();
  audio.currentTime = 0;
};