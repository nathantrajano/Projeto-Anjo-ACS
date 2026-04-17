import { useState, useMemo } from "react";
import { Mic, X, ArrowRight, Paperclip, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { resolveIntent } from "@/utils/decisionEngine";
import { INTENTS } from "@/data/mockData";

const Listening = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(true);

  // Filtra sugestões baseadas no que está sendo digitado
  const suggestions = useMemo(() => {
    if (!text || text.length < 2) return [];
    const normalized = text.toLowerCase();
    return INTENTS.filter(intent => 
      intent.title.toLowerCase().includes(normalized) || 
      intent.keywords.some(k => k.toLowerCase().includes(normalized))
    ).slice(0, 3);
  }, [text]);

  const handleProceed = (selectedText?: string) => {
    const finalIteration = selectedText || text;
    if (!finalIteration.trim()) return;
    
    const intent = resolveIntent(finalIteration);
    if (intent) {
      navigate('/confirmacao', { state: { intent } });
    } else {
      navigate('/selecionar-intencao', { state: { fallbackText: finalIteration } });
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col px-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="pt-8 text-center">
        <h2 className="text-3xl font-extrabold text-[#1B4332]">Estou ouvindo...</h2>
        <p className="text-gray-500 font-medium mt-1">O que posso ajudar você a encontrar hoje?</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <button 
          onClick={() => setIsListening(!isListening)}
          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-1000 ${isListening ? 'bg-emerald-100 scale-110' : 'bg-[#B7E4C7]'}`}
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all ${isListening ? 'bg-[#1B4332] animate-pulse' : 'bg-[#1B4332]'}`}>
            <Mic size={40} className="text-white" />
          </div>
        </button>

        <div className="w-full relative">
          <div className="glass-card min-h-[120px] flex flex-col gap-4 relative z-20">
            <textarea 
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                if (isListening) setIsListening(false);
              }}
              placeholder="Diga ou digite sua dúvida aqui..."
              className="w-full bg-transparent border-none focus:ring-0 text-lg font-bold text-[#1B4332] resize-none placeholder:text-gray-300"
              rows={3}
              autoFocus
            />
            <div className="flex justify-between items-center border-t border-gray-100 pt-3">
               <button className="text-gray-400 p-2"><Paperclip size={20} /></button>
               <span className="text-[10px] font-bold text-gray-300 uppercase italic">
                 {isListening ? "Aguardando áudio..." : "Edição manual"}
               </span>
            </div>
          </div>

          {/* Lista de Sugestões / Autocompletar */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200 z-10">
              {suggestions.map((sug) => (
                <button
                  key={sug.id}
                  onClick={() => {
                    setText(sug.title);
                    handleProceed(sug.title);
                  }}
                  className="bg-white/90 backdrop-blur-md border border-emerald-100 p-4 rounded-2xl flex items-center gap-3 shadow-sm hover:shadow-md active:scale-95 transition-all text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#1B4332]">
                    <Search size={14} />
                  </div>
                  <span className="font-bold text-[#1B4332] text-sm">Sugerido: <span className="opacity-70 font-medium">{sug.title}</span></span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pb-8 flex flex-col gap-3 mt-4">
        <button 
          onClick={() => handleProceed()}
          disabled={!text.trim()}
          className="pill-button bg-[#1B4332] text-white disabled:opacity-50"
        >
          Prosseguir
          <ArrowRight size={20} />
        </button>
        <button 
          onClick={() => navigate('/')}
          className="pill-button bg-transparent border-2 border-[#1B4332] text-[#1B4332] shadow-none"
        >
          Cancelar
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default Listening;