"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, X, ArrowRight, MicOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getQueryNavigationTarget } from "@/utils/decisionEngine";
import { getSpeechRecognition } from "@/utils/recognition";

const Listening = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  
  // Referências para controlar a auto-reinicialização e acúmulo de texto
  const shouldListenRef = useRef(false);
  const finalizedTextRef = useRef("");

  useEffect(() => {
    const recognition = getSpeechRecognition();
    if (recognition) {
      recognition.onresult = (event: any) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        // Se houver texto final, adicionamos ao nosso acumulador
        if (finalTranscript) {
          finalizedTextRef.current += finalizedTextRef.current ? " " + finalTranscript : finalTranscript;
        }

        // O texto visível é a junção do finalizado com o que ainda está sendo interpretado
        const currentText = finalizedTextRef.current + (interimTranscript ? " " + interimTranscript : "");
        setText(currentText.trim());
      };

      recognition.onend = () => {
        // Se ainda deveria estar ouvindo, o navegador parou sozinho. Vamos reiniciar.
        if (shouldListenRef.current) {
          try {
            recognition.start();
          } catch (e) {
            console.error("Erro ao reiniciar o reconhecimento", e);
            setIsListening(false);
            shouldListenRef.current = false;
          }
        } else {
          setIsListening(false);
        }
      };

      recognition.onerror = (event: any) => {
        console.error("Erro no reconhecimento de voz:", event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          shouldListenRef.current = false;
          setIsListening(false);
        }
      };

      recognitionRef.current = recognition;
    }

    return () => {
      shouldListenRef.current = false;
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleListening = () => {
    if (isListening) {
      shouldListenRef.current = false;
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      // Se não tinha texto antes, garante que limpamos para começar do zero
      if (!text.trim()) {
        finalizedTextRef.current = "";
      }
      shouldListenRef.current = true;
      setIsListening(true);
      try {
        recognitionRef.current?.start();
      } catch (e) {
        console.error("Erro ao iniciar reconhecimento", e);
        setIsListening(false);
        shouldListenRef.current = false;
      }
    }
  };

  const handleProceed = () => {
    if (!text.trim() || isListening) return;

    const target = getQueryNavigationTarget(text);
    navigate(target.path, { state: target.state });
  };

  return (
    <div className="min-h-[80vh] flex flex-col px-6 animate-in fade-in slide-in-from-bottom-8 duration-500 select-none">
      <div className="pt-8 text-center">
        <h2 className="text-3xl font-extrabold text-[#1B4332]">
          {isListening ? "Ouvindo você..." : "Toque para falar"}
        </h2>
        <p className="text-gray-500 font-medium mt-1">
          {isListening ? "Toque no botão vermelho para parar." : "Pressione o microfone para começar."}
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <button 
          onClick={toggleListening}
          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 touch-none ${isListening ? 'bg-rose-100 scale-110 shadow-2xl shadow-rose-200' : 'bg-[#B7E4C7]'}`}
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isListening ? 'bg-rose-500' : 'bg-[#1B4332]'}`}>
            {isListening ? <MicOff size={40} className="text-white animate-pulse" /> : <Mic size={40} className="text-white" />}
          </div>
        </button>

        <div className="w-full relative">
          <div className={`glass-card min-h-[140px] flex flex-col gap-4 relative z-20 border-2 transition-all duration-300 ${isListening ? 'border-rose-400 bg-white shadow-xl' : 'border-dashed border-emerald-200 opacity-60'}`}>
            <textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Sua fala aparecerá aqui..."
              className="w-full bg-transparent border-none focus:ring-0 text-lg font-bold text-[#1B4332] resize-none placeholder:text-gray-300"
              rows={4}
              readOnly={isListening}
            />
          </div>
        </div>
      </div>

      <div className="pb-8 flex flex-col gap-3 mt-4">
        <button 
          onClick={handleProceed}
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