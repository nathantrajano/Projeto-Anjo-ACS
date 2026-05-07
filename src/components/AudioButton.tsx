import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { speakText, playAudio, stopAudio } from "@/services/ttsService";
import { cn } from "@/lib/utils";

interface AudioButtonProps {
  text: string;
  label?: string;
  className?: string;
  variant?: "pill" | "icon" | "ghost";
}

export const AudioButton = ({
  text,
  label = "Ouvir",
  className,
  variant = "pill",
}: AudioButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  // Limpa recursos ao desmontar
  useEffect(() => {
    return () => {
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleToggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isPlaying) {
      // Parar áudio
      if (audioRef.current) {
        stopAudio(audioRef.current);
      }
      setIsPlaying(false);
      return;
    }

    if (isLoading) return;

    setIsLoading(true);
    try {
      // Gerar áudio via backend
      const { audioUrl } = await speakText(text);
      audioUrlRef.current = audioUrl;
      
      // Reproduzir áudio
      audioRef.current = playAudio(audioUrl);
      setIsPlaying(true);
      
      // Monitorar fim da reprodução
      audioRef.current.onended = () => {
        setIsPlaying(false);
      };
    } catch (error) {
      console.error("Erro ao reproduzir áudio:", error);
      // Aqui você poderia adicionar um toast de erro
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleToggle}
        disabled={isLoading}
        className={cn(
          "p-2 rounded-full transition-all active:scale-90",
          isPlaying ? "bg-[#1B4332] text-white shadow-md" : "text-[#1B4332] hover:bg-emerald-50",
          isLoading && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <VolumeX size={18} />
        ) : (
          <Volume2 size={18} />
        )}
      </button>
    );
  }

  if (variant === "ghost") {
    return (
      <button
        onClick={handleToggle}
        disabled={isLoading}
        className={cn(
          "flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all",
          isPlaying ? "bg-rose-500 text-white" : "text-[#1B4332] bg-emerald-50",
          isLoading && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <VolumeX size={14} />
        ) : (
          <Volume2 size={14} />
        )}
        {isPlaying ? "Parar" : label}
      </button>
    );
  }

  // Variante padrão (pill)
  return (
    <button
      onClick={handleToggle}
      disabled={isLoading}
      className={cn(
        "pill-button flex items-center gap-2 !py-3 !px-6 transition-all active:scale-95",
        isPlaying ? "bg-rose-500 text-white" : "bg-[#1B4332] text-white",
        isLoading && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : isPlaying ? (
        <VolumeX size={18} />
      ) : (
        <Volume2 size={18} />
      )}
      <span className="font-bold">
        {isPlaying ? "Parar Áudio" : label}
      </span>
    </button>
  );
};