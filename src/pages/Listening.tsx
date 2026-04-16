import { useState, useEffect } from "react";
import { Mic, X, ArrowRight, Paperclip } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { resolveIntent } from "@/utils/decisionEngine";

const Listening = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(true);
  
  const simulationPhrases = [
    "Como cadastrar uma nova família?",
    "Preciso registrar uma visita domiciliar.",
    "O e-SUS está dando erro na hora de sincronizar.",
    "Onde encontro a ficha de cadastro individual?"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isListening && text === "") {
      timeout = setTimeout(() => {
        setText(simulationPhrases[Math.floor(Math.random() * simulationPhrases.length)]);
        setIsListening(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isListening]);

  const handleProceed = () => {
    const intent = resolveIntent(text);
    if (intent) {
      navigate('/confirmacao', { state: { intent } });
    } else {
      navigate('/selecionar-intencao', { state: { fallbackText: text } });
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col px-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="pt-8 text-center">
        <h2 className="text-3xl font-extrabold text-[#1B4332]">Estou ouvindo...</h2>
        <p className="text-gray-500 font-medium mt-1">O que posso ajudar você a encontrar hoje?</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-12">
        <button className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-1000 ${isListening ? 'bg-emerald-100 scale-110' : 'bg-[#B7E4C7]'}`}>
          <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all ${isListening ? 'bg-[#1B4332] animate-pulse' : 'bg-[#1B4332]'}`}>
            <Mic size={40} className="text-white" />
          </div>
        </button>

        <div className="w-full glass-card min-h-[120px] flex flex-col gap-4">
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Aguardando fala ou digite aqui..."
            className="w-full bg-transparent border-none focus:ring-0 text-lg font-bold text-[#1B4332] resize-none placeholder:text-gray-300"
            rows={3}
          />
          <div className="flex justify-between items-center border-t border-gray-100 pt-3">
             <button className="text-gray-400 p-2"><Paperclip size={20} /></button>
             <span className="text-[10px] font-bold text-gray-300 uppercase italic">Transcrição simulada</span>
          </div>
        </div>
      </div>

      <div className="pb-8 flex flex-col gap-3">
        <button 
          onClick={handleProceed}
          disabled={!text}
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