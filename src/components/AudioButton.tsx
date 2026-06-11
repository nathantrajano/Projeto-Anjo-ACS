import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import { speak, stopSpeaking } from "@/utils/speech";
import { setAudioPlayingCallback, getAudioDuration } from "@/utils/audioManager";

interface AudioButtonProps {
  text: string;
  label?: string;
  className?: string;
  variant?: 'pill' | 'icon' | 'ghost';
}

export const AudioButton = ({ text, label = "Ouvir", className, variant = 'pill' }: AudioButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Registra callback para atualizar estado de reprodução
    setAudioPlayingCallback((playing) => {
      setIsPlaying(playing);
    });

    return () => stopSpeaking();
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      speak(text);
      setIsPlaying(true);
      
      // Resetar estado manualmente após um tempo baseado no texto (estimativa)
      const duration = getAudioDuration(text.length); 
      setTimeout(() => {
        if (isPlaying) {
          setIsPlaying(false);
        }
      }, duration);
    }
  };

  if (variant === 'icon') {
    return (
      <button 
        onClick={handleToggle}
        className={`p-2 rounded-full transition-all active:scale-90 ${isPlaying ? 'bg-[#1B4332] text-white shadow-md' : 'text-[#1B4332] hover:bg-emerald-50'} ${className}`}
      >
        {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    );
  }

  if (variant === 'ghost') {
    return (
      <button 
        onClick={handleToggle}
        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all active:scale-95 ${
          isPlaying ? 'bg-rose-500 text-white' : 'text-[#1B4332] bg-emerald-50'
        } ${className}`}
      >
        {isPlaying ? <VolumeX size={14} /> : <Volume2 size={14} />}
        {isPlaying ? "Parar" : label}
      </button>
    );
  }

  return (
    <button 
      onClick={handleToggle}
      className={`pill-button flex items-center gap-2 !py-3 !px-6 transition-all active:scale-95 ${
        isPlaying ? 'bg-rose-500 text-white' : 'bg-[#1B4332] text-white'
      } ${className}`}
    >
      {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
      <span className="font-bold">{isPlaying ? "Parar Áudio" : label}</span>
    </button>
  );
};