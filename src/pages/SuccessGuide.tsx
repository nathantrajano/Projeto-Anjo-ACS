"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Home, Award, Star, CheckCircle2 } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";

const SuccessGuide = () => {
  const navigate = useNavigate();
  
  const motivationText = "Missão cumprida! O Ministério da Saúde agradece seu empenho. Você é a peça fundamental que leva o SUS para dentro da casa dos brasileiros. Seu trabalho de hoje garante um futuro com mais saúde para toda a sua comunidade. Orgulhe-se de ser ACS!";

  return (
    <div className="px-6 min-h-[90vh] flex flex-col items-center justify-center gap-8 animate-in zoom-in-95 duration-500 pb-12">
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-200 blur-3xl opacity-30 animate-pulse"></div>
        <div className="relative w-32 h-32 bg-[#1B4332] rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
          <Award size={64} className="text-[#B7E4C7]" />
        </div>
        <div className="absolute -top-2 -right-2 bg-yellow-400 p-2 rounded-full shadow-lg border-4 border-[#F0F7F0]">
          <Star size={20} className="text-white" fill="currentColor" />
        </div>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CheckCircle2 size={24} className="text-emerald-600" />
          <span className="font-black text-emerald-600 uppercase tracking-widest text-sm">Guia Concluído</span>
        </div>
        <h2 className="text-4xl font-black text-[#1B4332] leading-tight">Você é fundamental!</h2>
      </div>

      <div className="bg-white border-2 border-emerald-100 p-8 rounded-[2.5rem] text-center relative overflow-hidden shadow-xl w-full">
        <Heart size={80} className="absolute -bottom-4 -right-4 text-emerald-50 opacity-20" fill="currentColor" />
        <p className="text-[#1B4332] text-xl font-bold leading-relaxed italic relative z-10">
          "{motivationText}"
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <AudioButton 
          text={motivationText} 
          label="Ouvir reconhecimento oficial"
          className="w-full"
        />
        
        <div className="w-full flex flex-col gap-3 mt-2">
          <button 
            onClick={() => navigate('/')}
            className="pill-button bg-[#1B4332] text-white w-full shadow-lg h-14"
          >
            <Home size={20} />
            Voltar para o Início
          </button>
        </div>
        
        {/* Rodapé Institucional Reconstruído */}
        <div className="w-full mt-12 pt-8 border-t border-emerald-100 flex flex-col items-center gap-4">
           <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-50 flex items-center justify-center">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Logo_do_SUS.svg" 
               alt="Logo SUS" 
               className="h-10 w-auto block"
               style={{ minHeight: '40px' }}
             />
           </div>
           <div className="text-center space-y-1">
             <p className="text-[11px] text-[#1B4332] font-black uppercase tracking-[0.25em] leading-none">
               Ministério da Saúde
             </p>
             <div className="flex items-center justify-center gap-2">
               <div className="h-[1px] w-4 bg-emerald-200"></div>
               <p className="text-[9px] text-emerald-700 font-bold uppercase tracking-widest">
                 Governo Federal
               </p>
               <div className="h-[1px] w-4 bg-emerald-200"></div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessGuide;