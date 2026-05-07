import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import { speak, playAudio } from "@/utils/speech";

interface AudioButtonProps {
  text: string;
  label?: string;
  className?: string;
  variant?: 'pill' | 'icon' | 'ghost';
}

export const AudioButton: React.FC<AudioButtonProps> = ({ text, label = "Ouvir", className, variant = 'pill' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (isPlaying) {
        playAudio(text); // Toca o áudio associado
      }
    };
  }, [isPlaying, text]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      playAudio(text); // Toca o áudio associado
      setIsPlaying(false);
    } else {
      speak(text); // Usa speechSynthesis para frases dinâmicas
      setIsPlaying(true);
    }
  };

  if (variant === 'icon') {
    return (
      <button onClick={handleToggle} className={`p-2 rounded-full transition-all active:scale-90 ${isPlaying ? 'bg-[#1B4332] text-white shadow-md' : 'text-[#1B4332] hover:bg-emerald-50'} ${className}`}>
        {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    );
  }

  if (variant === 'ghost') {
    return (
      <button onClick={handleToggle} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all active:scale-95 ${isPlaying ? 'bg-rose-500 text-white' : 'text-[#1B4332] bg-emerald-50'} ${className}`}>
        {isPlaying ? <VolumeX size={14} /> : <Volume2 size={14} />}
        {isPlaying ? "Parar" : label}
      </button>
    );
  }

  return (
    <button onClick={handleToggle} className={`pill-button flex items-center gap-2 !py-3 !px-6 transition-all active:scale-95 ${isPlaying ? 'bg-rose-500 text-white' : 'bg-[#1B4332] text-white'} ${className}`}>
      {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
      <span className="font-bold">{isPlaying ? "Parar Áudio" : label}</span>
    </button>
  );
};