"use client";

import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { GUIDES } from "@/data/mockData";
import { ArrowLeft, ChevronRight, HelpCircle } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";
import { getAudioPath } from "@/utils/audioMappings";
import { playAudio, stopAudio } from "@/utils/audioManager";

const GuideSteps = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = GUIDES.find(g => g.id === id);
  const [isPlayingFullGuide, setIsPlayingFullGuide] = useState(false);
  const shouldContinueRef = useRef(true);

  if (!guide) {
    return (
      <div className="p-8 text-center">
        <p>Guia não encontrado.</p>
        <button onClick={() => navigate('/')} className="mt-4 text-emerald-600 font-bold underline">Voltar</button>
      </div>
    );
  }

  /**
   * Reproduz o guia completo em sequência:
   * 1. Título do guia
   * 2. Resumo do guia
   * 3. Cada passo (título + descrição)
   * 
   * Aguarda cada áudio terminar antes de iniciar o próximo
   */
  const playFullGuideSequence = async () => {
    shouldContinueRef.current = true;
    setIsPlayingFullGuide(true);
    
    try {
      const textsToPlay = [
        `${guide.title}`, // Título
        guide.summary,    // Resumo
        ...guide.steps.map(s => `${s.title}. ${s.description}`), // Cada passo
      ];

      console.log(`[Audio] Iniciando sequência com ${textsToPlay.length} itens`);

      for (let i = 0; i < textsToPlay.length; i++) {
        if (!shouldContinueRef.current) {
          console.log(`[Audio] Sequência cancelada pelo usuário`);
          break;
        }
        
        const text = textsToPlay[i];
        let audioPath = getAudioPath(text);
        
        // Se não encontrar, tenta um padrão derivado para passos
        if (!audioPath && i >= 2) {
          const stepIndex = i - 2 + 1; // Primeiro passo é índice 2
          audioPath = `passos/${guide.id}_step${stepIndex}.mp3`;
        }
        
        console.log(`[Audio] Passo ${i + 1}/${textsToPlay.length}: "${text.substring(0, 50)}..." → ${audioPath || "MAPEAMENTO NÃO ENCONTRADO"}`);
        
        if (audioPath) {
          // playAudio() retorna uma Promise que resolve quando o áudio termina
          await playAudio(audioPath);
        } else {
          console.warn(`[Audio] Nenhum áudio mapeado para: "${text}"`);
        }
      }
      
      console.log(`[Audio] Sequência concluída!`);
    } catch (error) {
      console.error(`[Audio] Erro durante sequência:`, error);
    } finally {
      setIsPlayingFullGuide(false);
      shouldContinueRef.current = false;
    }
  };

  const stopFullGuideSequence = () => {
    shouldContinueRef.current = false;
    stopAudio();
    setIsPlayingFullGuide(false);
  };

  return (
    <div className="px-6 flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300 pb-32">
      <div className="flex items-center gap-2 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#1B4332] active:scale-90 transition-transform">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-extrabold text-[#1B4332]">Como fazer</h2>
      </div>

      {/* CORRIGIDO: Removido glass-card e garantido fundo sólido escuro */}
      <div className="bg-[#1B4332] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
        <h3 className="text-2xl font-black leading-tight relative z-10">{guide.title}</h3>
        <p className="text-emerald-100 text-sm mt-3 font-medium leading-relaxed relative z-10">{guide.summary}</p>
        
        <button 
          onClick={() => isPlayingFullGuide ? stopFullGuideSequence() : playFullGuideSequence()}
          className="mt-6 w-full justify-center !bg-white/20 !text-white border border-white/20 hover:!bg-white/30 px-4 py-2 rounded-lg font-medium transition-all active:scale-95"
        >
          {isPlayingFullGuide ? "⏸ Parando..." : "🔊 Ouvir guia completo"}
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {guide.steps.map((step, index) => (
          <div key={step.id} className="bg-white p-5 rounded-2xl border border-gray-100 flex gap-4 animate-in slide-in-from-bottom-4 shadow-sm" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="w-8 h-8 rounded-full bg-[#B7E4C7] text-[#1B4332] flex items-center justify-center font-black shrink-0 text-sm">
              {step.id}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-[#1B4332]">{step.title}</h4>
                <AudioButton 
                  text={`${step.title}. ${step.description}`} 
                  variant="icon" 
                  className="-mt-1 -mr-2" 
                />
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <button 
          onClick={() => navigate('/sucesso-guia')}
          className="pill-button bg-[#1B4332] text-white shadow-lg active:scale-95"
        >
          Pronto
          <ChevronRight size={20} />
        </button>
        
        {guide.hasDetailedGuide !== false && (
          <button 
            onClick={() => navigate(`/guia-detalhado/${id}`)}
            className="pill-button bg-white border-2 border-[#1B4332] text-[#1B4332] shadow-none active:scale-95 flex items-center justify-center gap-2"
          >
            Ir para guia detalhado
            <ChevronRight size={20} />
          </button>
        )}

        <button 
          onClick={() => navigate('/ajuda')}
          className="flex items-center justify-center gap-2 py-4 text-[#1B4332] font-bold text-sm active:opacity-70"
        >
          <HelpCircle size={18} />
          Ainda com dúvidas? Fale conosco
        </button>
      </div>
    </div>
  );
};

export default GuideSteps;