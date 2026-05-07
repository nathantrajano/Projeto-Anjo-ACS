"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Play, Pause, ArrowLeft, MessageSquare, Sun, Share2, Sparkles } from "lucide-react";
import { MOTIVATIONAL_MESSAGES } from "@/data/mockData";
import { AudioButton } from "@/components/AudioButton";
import { cn } from "@/lib/utils";

const Motivational = () => {
  const navigate = useNavigate();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const randomMsg = MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)];

  return (
    <div className="px-6 flex flex-col items-center gap-8 pb-32 overflow-hidden min-h-screen bg-gradient-to-b from-[#F0F7F0] to-white">
      {/* Header com botão de voltar */}
      <div className="w-full flex items-center justify-between pt-6 animate-in fade-in slide-in-from-top-4 duration-500">
        <button 
          onClick={() => navigate(-1)} 
          className="p-3 bg-white rounded-2xl shadow-sm text-[#1B4332] active:scale-90 transition-transform"
        >
          <ArrowLeft size={24} />
        </button>
        <button className="p-3 bg-white rounded-2xl shadow-sm text-[#1B4332] active:scale-90 transition-transform">
          <Share2 size={20} />
        </button>
      </div>

      {/* Hero Visual - Coração com Pulsação e Partículas */}
      <div className="relative mt-4 animate-in zoom-in duration-700">
        <div className="absolute inset-0 bg-rose-200 blur-3xl opacity-30 animate-pulse"></div>
        <div className="relative w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(244,63,94,0.15)] border-8 border-rose-50">
          <Heart size={80} className="text-rose-500 animate-bounce" fill="currentColor" />
          <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-pulse" size={24} />
        </div>
      </div>

      {/* Texto de Boas Vindas */}
      <div className="text-center space-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
        <h2 className="text-3xl font-black text-[#1B4332] tracking-tight">Você é essencial!</h2>
        <p className="text-gray-500 font-medium max-w-[280px] mx-auto">
          Um momento de paz para recarregar as energias antes de continuar.
        </p>
      </div>

      {/* Card da Mensagem Principal */}
      <div className="w-full relative animate-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
        <div className="glass-card bg-[#1B4332] text-white p-10 text-center relative overflow-hidden shadow-2xl border-none">
          <div className="absolute -top-10 -right-10 p-4 opacity-10 rotate-12">
             <Sun size={180} />
          </div>
          <p className="text-2xl font-serif italic relative z-10 leading-relaxed font-medium">
            "{randomMsg}"
          </p>
          <div className="mt-8 relative z-10 flex justify-center">
            <AudioButton 
              text={randomMsg} 
              label="Ouvir Mensagem"
              variant="ghost"
              className="!bg-white/20 !text-white border border-white/30 !py-2 !px-6"
            />
          </div>
        </div>
      </div>

      {/* Player de Áudio do Dia (Simulado) */}
      <div className="w-full animate-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
        <div className="glass-card p-5 flex items-center gap-5 bg-white border border-gray-100 shadow-lg">
          <button 
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0 transition-all shadow-md active:scale-95",
              isPlayingAudio ? "bg-rose-500" : "bg-[#1B4332]"
            )}
          >
            {isPlayingAudio ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
          </button>
          <div className="flex-1">
            <div className="flex justify-between items-end mb-2">
              <div>
                <p className="text-[10px] font-black text-[#1B4332] uppercase tracking-widest opacity-50">Áudio do Ministério</p>
                <p className="text-sm font-bold text-[#1B4332]">Palavra do Secretário</p>
              </div>
              <p className="text-[10px] text-gray-400 font-bold">01:42 / 03:00</p>
            </div>
            <div className="w-full h-2 bg-emerald-50 rounded-full relative overflow-hidden">
              <div 
                className={cn(
                  "absolute inset-y-0 left-0 bg-[#2D6A4F] rounded-full transition-all duration-1000",
                  isPlayingAudio ? "w-1/2" : "w-1/3"
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Badges de Reconhecimento */}
      <div className="grid grid-cols-2 gap-4 w-full animate-in slide-in-from-bottom-10 duration-700 delay-700 fill-mode-both">
         <div className="bg-rose-50 p-6 rounded-[2rem] border border-rose-100 text-center flex flex-col items-center">
            <span className="text-3xl mb-3">🤝</span>
            <p className="text-xs font-black text-rose-900 uppercase tracking-tighter leading-tight">Você não está sozinho</p>
         </div>
         <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100 text-center flex flex-col items-center">
            <span className="text-3xl mb-3">💪</span>
            <p className="text-xs font-black text-emerald-900 uppercase tracking-tighter leading-tight">Orgulho do seu trabalho</p>
         </div>
      </div>

      {/* Botões de Ação Final */}
      <div className="w-full flex flex-col gap-4 mt-4 animate-in slide-in-from-bottom-12 duration-700 delay-1000 fill-mode-both">
        <button 
          onClick={() => navigate('/')}
          className="pill-button bg-[#1B4332] text-white !py-5 shadow-[0_10px_30px_rgba(27,67,50,0.2)]"
        >
          Obrigado, Anjo
        </button>
        <button 
          onClick={() => navigate('/ouvir')}
          className="pill-button bg-transparent border-2 border-[#1B4332] text-[#1B4332] shadow-none hover:bg-[#1B4332]/5"
        >
          <MessageSquare size={20} />
          Tenho uma nova dúvida
        </button>
      </div>
    </div>
  );
};

export default Motivational;