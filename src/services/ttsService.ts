import { useEffect, useRef } from "react";

let isPlaying = false;
let currentAudioUrl: string | null = null;

/**
 * Envia texto para o backend e reproduz o áudio retornado.
 * Mantém controle de reprodução (play, stop) via flags e URLs temporárias.
 */
export async function speakText(text: string): Promise<void> {
  try {
    // 1️⃣ Envia solicitação ao backend
    const response = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    // 2️⃣ Verifica erro de rede ou de processamento
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`TTS error: ${err}`);
    }

    // 3️⃣ Recebe o áudio como Blob (Piper devolve o stream de áudio)
    const audioBlob = await response.blob();

    // 4️⃣ Cria URL temporário e reproduz
    const url = URL.createObjectURL(audioBlob);
    currentAudioUrl && URL.revokeObjectURL(currentAudioUrl);
    currentAudioUrl = url;

    const audio = new Audio(url);
    isPlaying = true;
    audio.play().catch((e) => console.error("Falha ao reproduzir áudio", e));

    // 5️⃣ Limpeza automática após reprodução
    const cleanup = () => {
      URL.revokeObjectURL(url);
      isPlaying = false;
      currentAudioUrl = null;
    };
    audio.onended = cleanup;
  } catch (err) {
    console.error("SpeakText fallback:", err);
    // Fallback simples usando SpeechSynthesis (mantém compatibilidade)
    if ("speechSynthesis" in window) {
      const utter = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utter);
    }
  }
}