"use client";

import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { GUIDES } from "@/data/mockData";
import { ArrowLeft, ChevronRight, MousePointer2 } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";

const DetailedGuide = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = GUIDES.find(g => g.id === id);

  if (!guide) return null;

  return (
    <div className="px-6 flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300 pb-32">
      <div className="flex items-center gap-2 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#1B4332]"><ArrowLeft size={24} /></button>
        <h2 className="text-xl font-extrabold text-[#1B4332]">Passo a Passo Visual</h2>
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

            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-100 shadow-lg bg-gray-100 aspect-video flex items-center justify-center">
              {/* Mock de screenshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-full h-4 bg-white/50 rounded mb-2 w-3/4"></div>
                <div className="w-full h-4 bg-white/50 rounded mb-2 w-1/2"></div>
                <div className="mt-4 p-3 bg-emerald-500 rounded-lg shadow-xl animate-pulse">
                  <MousePointer2 className="text-white" size={24} />
                </div>
              </div>
              
              {/* Overlay de instrução visual */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-emerald-200 shadow-sm">
                <p className="text-[11px] font-bold text-[#1B4332] leading-tight">
                  <span className="text-emerald-600">Dica:</span> Clique no botão verde localizado no canto superior direito da tela.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 font-medium leading-relaxed bg-white p-4 rounded-2xl border border-gray-100">
              {step.description} Além disso, certifique-se de que o campo "Data" esteja preenchido corretamente antes de avançar.
            </p>
          </div>
        ))}
      </div>

      <button 
        onClick={() => navigate('/sucesso-guia')}
        className="pill-button bg-[#1B4332] text-white mt-4"
      >
        Agora eu consegui!
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default DetailedGuide;