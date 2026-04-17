import { useNavigate } from "react-router-dom";
import { Heart, Home, Award, Star } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";

const SuccessGuide = () => {
  const navigate = useNavigate();
  
  const motivationText = "Parabéns pelo excelente trabalho! O Ministério da Saúde reconhece que o seu esforço diário é a base do SUS. Você é o elo fundamental que garante saúde e dignidade para a sua comunidade. Continue assim, herói do campo!";

  return (
    <div className="px-6 min-h-[90vh] flex flex-col items-center justify-center gap-8 animate-in zoom-in-95 duration-500">
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-200 blur-3xl opacity-30 animate-pulse"></div>
        <div className="relative w-32 h-32 bg-[#1B4332] rounded-full flex items-center justify-center shadow-2xl">
          <Award size={64} className="text-[#B7E4C7]" />
        </div>
        <div className="absolute -top-2 -right-2 bg-yellow-400 p-2 rounded-full shadow-lg">
          <Star size={20} className="text-white" fill="currentColor" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-black text-[#1B4332]">Missão Cumprida!</h2>
        <p className="text-[#2D6A4F] font-bold mt-2 text-lg">Você concluiu este guia com sucesso.</p>
      </div>

      <div className="glass-card bg-white border-2 border-emerald-100 p-8 text-center relative overflow-hidden">
        <Heart size={80} className="absolute -bottom-4 -right-4 text-emerald-50 opacity-10" fill="currentColor" />
        <p className="text-[#1B4332] font-medium leading-relaxed italic">
          "{motivationText}"
        </p>
      </div>

      <AudioButton 
        text={motivationText} 
        label="Ouvir mensagem de apoio"
        variant="ghost"
      />

      <div className="w-full flex flex-col gap-3 mt-4">
        <button 
          onClick={() => navigate('/')}
          className="pill-button bg-[#1B4332] text-white"
        >
          <Home size={20} />
          Voltar para o Início
        </button>
        <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">
          Ministério da Saúde • Orgulho de Ser ACS
        </p>
      </div>
    </div>
  );
};

export default SuccessGuide;