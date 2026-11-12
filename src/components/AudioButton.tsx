import { Volume2, Square } from "lucide-react";
import { useState, useEffect, useId } from "react";
import { speak, stopSpeaking, stopSpeakingIfSource } from "@/utils/speech";
import { subscribeAudioState } from "@/utils/audioManager";

interface AudioButtonProps {
  text: string;
  label?: string;
  className?: string;
  variant?: 'pill' | 'icon' | 'ghost';
  playbackId?: string;
  onBeforeToggle?: () => void;
}

export const AudioButton = ({
  text,
  label = "Ouvir",
  className,
  variant = 'pill',
  playbackId,
  onBeforeToggle,
}: AudioButtonProps) => {
  const generatedId = useId();
  const activeId = playbackId ?? generatedId;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeAudioState((state) => {
      setIsPlaying(state.isPlaying && state.sourceId === activeId);
    });

    return () => {
      unsubscribe();
      stopSpeakingIfSource(activeId);
    };
  }, [activeId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBeforeToggle?.();

    if (isPlaying) {
      stopSpeaking();
    } else {
      speak(text, activeId);
    }
  };

  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isPlaying ? "Parar áudio" : label}
        className={`p-2 rounded-full transition-all active:scale-90 ${isPlaying ? 'bg-[#1B4332] text-white shadow-md' : 'text-[#1B4332] hover:bg-emerald-50'} ${className ?? ''}`}
      >
        {isPlaying ? <Square size={14} fill="currentColor" className="m-0.5" /> : <Volume2 size={18} />}
      </button>
    );
  }

  if (variant === 'ghost') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isPlaying ? "Parar áudio" : label}
        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all active:scale-95 ${
          isPlaying ? 'bg-rose-500 text-white' : 'text-[#1B4332] bg-emerald-50'
        } ${className ?? ''}`}
      >
        {isPlaying ? <Square size={12} fill="currentColor" /> : <Volume2 size={14} />}
        {isPlaying ? "Parar" : label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isPlaying ? "Parar áudio" : label}
      className={`pill-button flex items-center gap-2 !py-3 !px-6 transition-all active:scale-95 ${
        isPlaying ? 'bg-rose-500 text-white' : 'bg-[#1B4332] text-white'
      } ${className ?? ''}`}
    >
      {isPlaying ? <Square size={14} fill="currentColor" /> : <Volume2 size={18} />}
      <span className="font-bold">{isPlaying ? "Parar Áudio" : label}</span>
    </button>
  );
};
