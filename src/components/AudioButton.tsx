import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import { speak, stopSpeaking } from "@/utils/speech";

interface AudioButtonProps {
  text: string;
  label?: string;
  className?: string;
  variant?: 'pill' | 'icon' | 'ghost';
}

export const AudioButton = ({ text, label = "Ouvir", className, variant = 'pill' }: AudioButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  const handleToggle = () => {
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      speak(text);
      setIsPlaying(true);
      
      // Resetar estado manualmente após um tempo baseado no texto (estimativa)
      const duration = text.length * 80; 
      setTimeout(() => setIsPlaying(false), duration);
    }
  };

  if (variant === 'icon') {
    return (
      <button 
        onClick={handleToggle}
        className={`p-2 rounded-full transition-all active:scale-90 ${isPlaying ? 'bg-[#1B4332] text-white' : 'text-[#1B4332] hover:bg-emerald-50'} ${className}`}
      >
        {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    );
  }

  if (variant === 'ghost') {
    return (
      <button 
        onClick={handleToggle}
        className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all ${
          isPlaying ? 'bg-[#1B4332] text-white' : 'text-[#2D6A4F] bg-[#B7E4C7]'
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
      className={`pill-button !py-3 !px-6 ${
        isPlaying ? 'bg-red-500 text-white' : 'bg-[#1B4332] text-white'
      } ${className}`}
    >
      {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
      {isPlaying ? "Parar Áudio" : label}
    </button>
  );
};