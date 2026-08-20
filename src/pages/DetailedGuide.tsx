"use client";

import React, { useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { GUIDES, COMFORTING_MESSAGES } from "@/data/mockData";
import { ArrowLeft, ChevronRight, MousePointer2, Heart, BookOpen, ExternalLink } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";

const DetailedGuide = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = GUIDES.find(g => g.id === id);

  const comfortingMessage = useMemo(() => {
    return COMFORTING_MESSAGES[Math.floor(Math.random() * COMFORTING_MESSAGES.length)];
  }, []);

  React.useEffect(() => {
    if (!guide || guide.hasDetailedGuide === false) {
      navigate(guide ? `/guia/${id}` : '/', { replace: true });
    }
  }, [guide, id, navigate]);

  if (!guide || guide.hasDetailedGuide === false) return null;

  return (
    <div className="px-6 flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300 pb-32">
      <div className="flex items-center gap-2 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#1B4332]"><ArrowLeft size={24} /></button>
        <h2 className="text-xl font-extrabold text-[#1B4332]">Passo a Passo Visual</h2>
      </div>

      {/* Banner com frase acalentadora ao topo */}
      <div className="w-full bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 text-center shadow-sm flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-[#1B4332] font-semibold text-sm">
          <Heart size={20} className="text-emerald-600 fill-emerald-600 animate-pulse" />
          <span>Você não está sozinho(a)!</span>
        </div>
        <p className="text-[#1B4332] font-medium text-xs sm:text-sm leading-relaxed">
          "{comfortingMessage}"
        </p>
        <div className="mt-1">
          <AudioButton 
            text={comfortingMessage} 
            label="Ouvir mensagem" 
            variant="ghost" 
            className="text-emerald-700 hover:bg-emerald-100/50 text-xs py-1 px-3 h-auto"
          />
        </div>
      </div>

      <div className="bg-[#1B4332] p-4 rounded-2xl text-white">
        <p className="text-xs font-black uppercase tracking-widest opacity-70">Guia Avançado</p>
        <h3 className="text-lg font-bold">{guide.title}</h3>
      </div>

      <div className="flex flex-col gap-8">
        {guide.steps.map((step, index) => (
          <div key={step.id} className="flex flex-col gap-4 animate-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 150}ms` }}>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1B4332] text-white flex items-center justify-center text-xs font-black shrink-0">
                {step.id}
              </div>
              <h4 className="font-bold text-[#1B4332]">{step.title}</h4>
            </div>

            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-100 shadow-lg bg-emerald-950/5 aspect-video flex items-center justify-center">
              {step.image ? (
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Mock visual de tela do e-SUS Território */
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-emerald-800/20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-3/4 h-3 bg-emerald-600/20 rounded mb-2"></div>
                  <div className="w-1/2 h-3 bg-emerald-600/15 rounded mb-3"></div>
                  <div className="p-3 bg-[#1B4332] rounded-xl shadow-md flex items-center gap-2 text-white text-xs font-bold">
                    <MousePointer2 size={18} className="text-emerald-400 animate-pulse" />
                    <span>Tela: {step.title}</span>
                  </div>
                </div>
              )}
              
              {/* Overlay de instrução visual */}
              {step.visualTip && (
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl border border-emerald-200 shadow-sm">
                  <p className="text-[11px] font-bold text-[#1B4332] leading-tight">
                    <span className="text-emerald-600">Dica Visual:</span> {step.visualTip}
                  </p>
                </div>
              )}
            </div>

            <p className="text-sm text-gray-600 font-medium leading-relaxed bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Link para o Manual Oficial Online do Ministério da Saúde */}
      <a 
        href="https://sisaps.saude.gov.br/sistemas/esusaps/docs/manual/TERRITORIO/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between gap-3 text-[#1B4332] hover:bg-emerald-100/60 transition-colors shadow-xs group mt-2"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#1B4332] text-white rounded-xl">
            <BookOpen size={20} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-wider text-emerald-700">Documentação Oficial</p>
            <p className="text-xs sm:text-sm font-extrabold">Manual e-SUS Território (Web)</p>
          </div>
        </div>
        <ExternalLink size={18} className="text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
      </a>

      <button 
        onClick={() => navigate('/sucesso-guia')}
        className="pill-button bg-[#1B4332] text-white mt-2"
      >
        Agora eu consegui!
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default DetailedGuide;