import { useParams, useNavigate } from "react-router-dom";
import { GUIDES } from "@/data/mockData";
import { ArrowLeft, Play, ChevronRight, HelpCircle } from "lucide-react";

const GuideSteps = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = GUIDES.find(g => g.id === id);

  if (!guide) {
    return (
      <div className="p-8 text-center">
        <p>Guia não encontrado.</p>
        <button onClick={() => navigate('/')} className="mt-4 text-emerald-600 font-bold underline">Voltar</button>
      </div>
    );
  }

  return (
    <div className="px-6 flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300 pb-32">
      <div className="flex items-center gap-2 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#1B4332]"><ArrowLeft size={24} /></button>
        <h2 className="text-xl font-extrabold text-[#1B4332]">Como fazer</h2>
      </div>

      <div className="glass-card bg-[#1B4332] text-white">
        <h3 className="text-2xl font-black leading-tight">{guide.title}</h3>
        <p className="text-emerald-100 text-sm mt-2 font-medium leading-relaxed">{guide.summary}</p>
        
        <button className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 text-sm font-bold border border-white/20">
          <Play size={16} fill="white" />
          Ouvir orientação
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {guide.steps.map((step, index) => (
          <div key={step.id} className="bg-white p-5 rounded-2xl border border-gray-100 flex gap-4 animate-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="w-8 h-8 rounded-full bg-[#B7E4C7] text-[#1B4332] flex items-center justify-center font-black shrink-0 text-sm">
              {step.id}
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[#1B4332]">{step.title}</h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <button className="pill-button bg-[#1B4332] text-white">
          Próximo passo
          <ChevronRight size={20} />
        </button>
        <button 
          onClick={() => navigate('/ajuda')}
          className="flex items-center justify-center gap-2 py-4 text-[#1B4332] font-bold text-sm"
        >
          <HelpCircle size={18} />
          Ainda com dúvidas? Fale conosco
        </button>
      </div>
    </div>
  );
};

export default GuideSteps;