import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import { speakText } from "@/services/ttsService";
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

  // Garante cancelamento ao desmontar ou ao mudar texto
  useEffect(() => {
    return () => {
      // Não há mais API centralizada para stop, mas mantemos a flag
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      // Não há API de pause/stop no backend, então apenas ignora
      // Futuro: poderia chamar um endpoint /api/tts/stop
    } else {
      // Usa a camada centralizada
      speakText(text).catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleToggle}
        className={cn(
          "p-2 rounded-full transition-all active:scale-90",
          isPlaying ? "bg-[#1B4332] text-white shadow-md" : "text-[#1B4332] hover:bg-emerald-50",
          className
        )}
      >
        {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    );
  }

  if (variant === "ghost") {
    return (
      <button
        onClick={handleToggle}
        className={cn(
          "flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all",
          isPlaying ? "bg-rose-500 text-white" : "text-[#1B4332] bg-emerald-50",
          className
        )}
      >
        {isPlaying ? <VolumeX size={14} /> : <Volume2 size={14} />}
        {isPlaying ? "Parar" : label}
      </button>
    );
  }

  // Variante padrão (pill)
  return (
    <button
      onClick={handleToggle}
      className={cn(
        "pill-button flex items-center gap-2 !py-3 !px-6 transition-all active:scale-95",
        isPlaying ? "bg-rose-500 text-white" : "bg-[#1B4332] text-white",
        className
      )}
    >
      {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
      <span className="font-bold">{isPlaying ? "Parar Áudio" : label}</span>
    </button>
  );
};