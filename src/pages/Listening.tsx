import { useState, useEffect, useRef } from "react";
import { Mic, X, ArrowRight, MicOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { resolveIntent } from "@/utils/decisionEngine";
import { getSpeechRecognition } from "@/utils/recognition";

const Listening = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const recognition = getSpeechRecognition();
    if (recognition) {
      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join("");
        setText(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
    };
  }, []);

  const startListening = () => {
    if (!isListening) {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.error("Erro ao iniciar reconhecimento", e);
      }
    }
  };

  const stopListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }
  };

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
        <h2 className="text-3xl font-extrabold text-[#1B4332]">
          {isListening ? "Ouvindo..." : "Segure para falar"}
        </h2>
        <p className="text-gray-500 font-medium mt-1">
          {isListening ? "Solte quando terminar." : "Pressione o microfone abaixo."}
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <button 
          onMouseDown={startListening}
          onMouseUp={stopListening}
          onMouseLeave={stopListening}
          onTouchStart={(e) => { e.preventDefault(); startListening(); }}
          onTouchEnd={(e) => { e.preventDefault(); stopListening(); }}
          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 touch-none ${isListening ? 'bg-emerald-100 scale-110' : 'bg-[#B7E4C7]'}`}
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isListening ? 'bg-red-500 animate-pulse' : 'bg-[#1B4332]'}`}>
            {isListening ? <MicOff size={40} className="text-white" /> : <Mic size={40} className="text-white" />}
          </div>
        </button>

        <div className="w-full relative">
          <div className="glass-card min-h-[140px] flex flex-col gap-4 relative z-20 border-2 border-dashed border-emerald-200">
            <textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Sua fala aparecerá aqui..."
              className="w-full bg-transparent border-none focus:ring-0 text-lg font-bold text-[#1B4332] resize-none placeholder:text-gray-300"
              rows={4}
            />
          </div>
        </div>
      </div>

      <div className="pb-8 flex flex-col gap-3 mt-4">
        <button 
          onClick={() => handleProceed()}
          disabled={!text.trim() || isListening}
          className="pill-button bg-[#1B4332] text-white disabled:opacity-30"
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