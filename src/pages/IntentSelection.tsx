import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES, INTENTS } from "@/data/mockData";
import { ArrowLeft, ChevronRight, Tablet, Home, UserPlus, FileText } from "lucide-react";

const iconMap: Record<string, any> = {
  UserPlus, Home, Tablet, FileText
};

const IntentSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fallbackText = location.state?.fallbackText || "";

  const handleSelectIntent = (intentId: string) => {
    const intent = INTENTS.find(i => i.id === intentId);
    if (intent) {
      navigate('/confirmacao', { state: { intent } });
    }
  };

  return (
    <div className="px-6 flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300">
      <div className="flex items-center gap-2 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#1B4332]"><ArrowLeft size={24} /></button>
        <h2 className="text-xl font-extrabold text-[#1B4332]">Qual a sua dúvida?</h2>
      </div>

      {fallbackText && (
        <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
          <p className="text-xs font-bold text-[#1B4332] uppercase opacity-50 mb-1">Você disse:</p>
          <p className="text-[#1B4332] font-bold italic">"{fallbackText}"</p>
        </div>
      )}

      <div className="flex flex-col gap-3 pb-32">
        {CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon] || FileText;
          return (
            <div key={cat.id} className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-2 mt-4">
                <Icon size={20} className="text-[#2D6A4F]" />
                <h3 className="font-extrabold text-[#1B4332] text-sm uppercase tracking-wider">{cat.title}</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                {cat.intents.length > 0 ? (
                  cat.intents.map(intentId => {
                    const intent = INTENTS.find(i => i.id === intentId);
                    return (
                      <button 
                        key={intentId}
                        onClick={() => handleSelectIntent(intentId)}
                        className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between group active:scale-[0.98] transition-all"
                      >
                        <span className="font-bold text-[#1B4332]">{intent?.title}</span>
                        <ChevronRight size={18} className="text-gray-300 group-hover:text-[#1B4332] transition-colors" />
                      </button>
                    );
                  })
                ) : (
                  <button 
                    onClick={() => navigate('/manual')}
                    className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between opacity-60"
                  >
                    <span className="font-bold text-[#1B4332]">Ver manuais desta categoria</span>
                    <ChevronRight size={18} className="text-gray-300" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntentSelection;