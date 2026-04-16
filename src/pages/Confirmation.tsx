import { useLocation, useNavigate } from "react-router-dom";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Intent } from "@/types";

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const intent = location.state?.intent as Intent;

  if (!intent) {
    navigate('/');
    return null;
  }

  return (
    <div className="px-6 min-h-[80vh] flex flex-col items-center justify-center gap-8 animate-in zoom-in-95 duration-300">
      <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/20">
        <Check size={48} className="text-white" strokeWidth={3} />
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-[#1B4332]">Entendi!</h2>
        <p className="text-gray-500 font-medium mt-2">
          Você quer saber como: <br />
          <span className="text-[#2D6A4F] text-xl font-black">"{intent.title}"</span>
        </p>
      </div>

      <div className="w-full flex flex-col gap-3 mt-4">
        <button 
          onClick={() => navigate(`/guia/${intent.guideId}`)}
          className="pill-button bg-[#1B4332] text-white"
        >
          Continuar para o guia
          <ArrowRight size={20} />
        </button>
        <button 
          onClick={() => navigate(-1)}
          className="pill-button bg-transparent text-[#1B4332] font-bold shadow-none"
        >
          Não era isso
        </button>
      </div>
    </div>
  );
};

export default Confirmation;