import<dyad-write path="src/pages/FeedbackDoubt.tsx" description="Nova tela de pergunta sobre continuidade da dúvida">
"use client";

import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { HelpCircle, CheckCircle2, MessageSquareText } from "lucide-react";
import { GUIDES } from "@/data/mockData";

const FeedbackDoubt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = GUIDES.find(g => g.id === id);

  return (
    <div className="px-6 flex flex-col items-center justify-center min-h-[80vh] gap-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center text-[#1B4332] animate-bounce">
        <HelpCircle size={48} />
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-[#1B4332]">A dúvida continua?</h2>
        <p className="text-gray-500 font-medium px-4">
          Conseguiu realizar o procedimento ou ainda precisa de uma ajuda mais detalhada?
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <button 
          onClick={() => navigate(`/guia-detalhado/${id}`)}
          className="pill-button bg-white border-2 border-[#1B4332] text-[#1B4332] shadow-none flex items-center justify-center gap-3"
        >
          <MessageSquareText size={20} />
          Sim, me mostre detalhes
        </button>
        
        <button 
          onClick={() => navigate('/sucesso-guia')}
          className="pill-button bg-[#1B4332] text-white flex items-center justify-center gap-3"
        >
          <CheckCircle2 size={20} />
          Não, já entendi!
        </button>
      </div>
    </div>
  );
};

export default FeedbackDoubt;