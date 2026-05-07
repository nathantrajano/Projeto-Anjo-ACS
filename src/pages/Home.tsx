import { Mic, Scan } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-[#1B4332] leading-tight">
          Bom dia,<br />estou com você hoje.
        </h2>
        <p className="text-gray-600 mt-2 font-medium">
          Sua guia rápido para o dia a dia no campo e no e-SUS.
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
    </div>
  );
};

export default Home;