// Mapeamento de frases fixas para áudios pré-gerados
const AUDIO_MAPPING: Record<string, string> = {
  "Seu trabalho salva vidas todos os dias": "dyad-media://media/jade-quokka-blink/.dyad/media/5d717a4e39af1cc330bcd065bfc69050.mp3",
  "Você é o elo fundamental entre a comunidade e a saúde": "dyad-media://media/jade-quokka-blink/.dyad/media/9c71f14dd802e29bc7932070d71246af.mp3",
  "Obrigado por sua dedicação à saúde pública brasileira": "dyad-media://media/jade-quokka-blink/.dyad/media/d5c004ab69c72a529814ce23b020c28f.mp3",
  "Cada cadastro é uma história que você ajuda a cuidar": "dyad-media://media/jade-quokka-blink/.dyad/media/804cfebca8896c1432c536438cac52cb.mp3",
  "Sua presença na casa das pessoas traz esperança e cuidado": "dyad-media://media/jade-quokka-blink/.dyad/media/fd911f086f3986bea9f5ffee5d9e55a5.mp3",
  "O SUS acontece através das suas mãos e dos seus pés no campo": "dyad-media://media/jade-quokka-blink/.dyad/media/2f707af4c8484819d1c647ff34e0a434.mp3"
};

// Função para tocar áudio pré-gerado
function playAudio(url: string) {
  const audio = new Audio(url);
  audio.play().catch(err => {
    console.error('Erro ao tocar áudio:', err);
    // Fallback para speechSynthesis se o áudio não funcionar    // @ts-ignore
    speak(text);
  });
}

// Função principal de fala - tenta usar áudio pré-gerado antes de recorrer ao speechSynthesis
export const speak = (text: string, fallbackText?: string) => {
  // Primeiro tenta reproduzir áudio pré-gerado
  const mappedAudio = AUDIO_MAPPING[text];
  
  if (mappedAudio) {
    playAudio(mappedAudio);
    return;
  }

  // Se não houver áudio mapeado, usa speechSynthesis (fallback)
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(fallbackText || text);
  window.speechSynthesis.speak(utterance);
};

// Expor playAudio para uso no AudioButton
export { playAudio };