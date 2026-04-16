import { useNavigate } from "react-router-dom";
import { Heart, Play, ArrowLeft, MessageSquare, Sun } from "lucide-react";
import { MOTIVATIONAL_MESSAGES } from "@/data/mockData";

const Motivational = () => {
  const navigate = useNavigate();
  const randomMsg = MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)];

  return (
    <div className="px-6 flex flex-col items-center gap-8 animate-in fade-in duration-700">
      <div className="w-full flex items-center gap-2 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#1B4332]"><ArrowLeft size={24} /></button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-rose-200 blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-rose-200">
          <Heart size={64} className="text-rose-500" fill="currentColor" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-black text-[#1B4332]">Você é um herói da sua comunidade!</h2>
        <p className="text-gray-500 font-medium mt-2">Um pequeno incentivo para o seu dia de campo.</p>
      </div>

      <div className="glass-card bg-emerald-900 text-white w-full text-center py-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <Sun size={120} />
        </div>
        <p className="text-2xl font-serif italic relative z-10 leading-relaxed">
          "{randomMsg}"
        </p>
      </div>

      <div className="w-full glass-card p-4 flex items-center gap-4 bg-white border border-gray-100">
        <button className="w-12 h-12 bg-[#1B4332] rounded-full flex items-center justify-center text-white shrink-0">
          <Play size={20} fill="currentColor" />
        </button>
        <div className="flex-1">
          <p className="text-xs font-bold text-[#1B4332] uppercase opacity-50">Áudio do dia</p>
          <div className="w-full h-1 bg-gray-100 rounded-full mt-2 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-[#1B4332]"></div>
          </div>
          <p className="text-[10px] text-gray-400 font-bold mt-1">01:42 / 03:00</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
         <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100 text-center">
            <span className="text-2xl mb-2 block">🤝</span>
            <p className="text-xs font-bold text-rose-900 leading-tight">Você não está sozinho!</p>
         </div>
         <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center">
            <span className="text-2xl mb-2 block">💪</span>
            <p className="text-xs font-bold text-emerald-900 leading-tight">Orgulho do seu trabalho!</p>
         </div>
      </div>

      <div className="w-full flex flex-col gap-3 mt-4 mb-20">
        <button 
          onClick={() => navigate('/')}
          className="pill-button bg-[#1B4332] text-white"
        >
          Obrigado, Anjo
        </button>
        <button 
          onClick={() => navigate('/ouvir')}
          className="pill-button bg-transparent border-2 border-[#1B4332] text-[#1B4332] shadow-none"
        >
          <MessageSquare size={20} />
          Tenho uma nova dúvida
        </button>
      </div>
    </div>
  );
};

export default Motivational;