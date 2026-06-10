import { useState, useEffect } from "react";
import { Mic, Scan, Music, Check, Play, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCustomMp3Url, setCustomMp3Url, speak, stopSpeaking } from "@/utils/speech";
import { showSuccess } from "@/utils/toast";

const PRESETS = [
  { name: "Sino Suave", url: "https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav" },
  { name: "Notificação Tech", url: "https://assets.mixkit.co/active_storage/sfx/2869/2869-84.wav" },
  { name: "Melodia Curta", url: "https://assets.mixkit.co/active_storage/sfx/2019/2019-84.wav" }
];

const Home = () => {
  const navigate = useNavigate();
  const [mp3Url, setMp3Url] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setMp3Url(getCustomMp3Url());
  }, []);

  const handleSave = () => {
    setCustomMp3Url(mp3Url);
    showSuccess("Áudio MP3 personalizado salvo com sucesso!");
  };

  const handleTest = () => {
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      speak("teste");
      setIsPlaying(true);
      // Simula o término do áudio após 4 segundos para resetar o botão
      setTimeout(() => setIsPlaying(false), 4000);
    }
  };

  const handleSelectPreset = (url: string) => {
    setMp3Url(url);
    setCustomMp3Url(url);
    showSuccess("Preset de áudio aplicado!");
    // Toca o preset imediatamente para demonstração
    stopSpeaking();
    const audio = new Audio(url);
    audio.play().catch(() => {});
  };

  return (
    <div className="flex flex-col gap-6 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-[#1B4332] leading-tight">
          Bom dia,<br />estou com você hoje.
        </h2>
        <p className="text-gray-600 mt-2 font-medium">
          Seu guia rápido para o dia a dia no campo e no e-SUS.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <button 
          onClick={() => navigate('/ouvir')}
          className="glass-card w-full flex items-center gap-6 py-8 px-6 group active:scale-95 transition-transform"
        >
          <div className="w-16 h-16 bg-[#1B4332] rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform shrink-0">
            <Mic size={28} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-[#1B4332]">Falar com o Anjo</h3>
            <p className="text-xs text-gray-500 font-medium">Toque para dizer sua dúvida</p>
          </div>
        </button>

        <button 
          onClick={() => navigate('/ocr')}
          className="glass-card w-full flex items-center gap-6 py-8 px-6 group active:scale-95 transition-transform border-emerald-100 bg-emerald-50/50"
        >
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform shrink-0">
            <Scan size={28} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-[#1B4332]">Ler Documento</h3>
            <p className="text-xs text-gray-500 font-medium">Foto de manuais ou telas</p>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => navigate('/selecionar-intencao')}
          className="bg-[#B7E4C7] p-6 rounded-[1.5rem] flex flex-col gap-3 active:scale-95 transition-transform"
        >
          <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center text-white">
            <span className="font-bold">?</span>
          </div>
          <span className="font-bold text-[#1B4332] text-sm">Dúvidas Frequentes</span>
        </button>
        <button 
          onClick={() => navigate('/motivacional')}
          className="bg-white p-6 rounded-[1.5rem] flex flex-col gap-3 border border-gray-100 active:scale-95 transition-transform"
        >
          <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
            <span className="font-bold">♥</span>
          </div>
          <span className="font-bold text-[#1B4332] text-sm">Mensagem do Dia</span>
        </button>
      </div>

      {/* Painel de Configuração de MP3 Personalizado */}
      <div className="bg-white p-6 rounded-[2rem] border border-emerald-100 shadow-md flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-2 text-[#1B4332]">
          <Music size={20} className="text-emerald-600" />
          <h3 className="font-extrabold text-base">Seu MP3 Personalizado</h3>
        </div>
        
        <p className="text-xs text-gray-500 font-medium leading-relaxed">
          Insira a URL de qualquer arquivo MP3/WAV público da internet para substituir todas as leituras de texto do app por este som.
        </p>

        <div className="flex flex-col gap-2">
          <input 
            type="text" 
            value={mp3Url}
            onChange={(e) => setMp3Url(e.target.value)}
            placeholder="https://exemplo.com/seu-audio.mp3"
            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold text-[#1B4332] outline-none focus:border-[#1B4332] transition-all"
          />
          
          <div className="flex gap-2">
            <button 
              onClick={handleSave}
              className="flex-1 bg-[#1B4332] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <Check size={14} />
              Salvar Link
            </button>
            <button 
              onClick={handleTest}
              className="px-4 bg-emerald-50 text-[#1B4332] py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <Play size={14} className={isPlaying ? "animate-pulse" : ""} />
              {isPlaying ? "Parar" : "Testar"}
            </button>
          </div>
        </div>

        {/* Presets Rápidos */}
        <div className="flex flex-col gap-1.5 pt-2 border-t border-gray-50">
          <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">Sons de Exemplo:</span>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPreset(preset.url)}
                className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 text-[11px] font-bold text-[#1B4332] px-3 py-1.5 rounded-lg transition-colors"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;