import { useNavigate } from "react-router-dom";
import { CheckCircle2, Home, MessageSquare, Volume2 } from "lucide-react";

const HelpSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 min-h-[80vh] flex flex-col items-center justify-center gap-8 animate-in zoom-in-95 duration-300">
      <div className="w-24 h-24 bg-[#B7E4C7] rounded-full flex items-center justify-center">
        <CheckCircle2 size={48} className="text-[#1B4332]" />
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-[#1B4332]">Enviado!</h2>
        <p className="text-gray-500 font-medium mt-2 leading-relaxed">
          Sua mensagem foi entregue com sucesso. <br />
          Nossa equipe responderá em breve via e-SUS ou e-mail cadastrado.
        </p>
      </div>

      <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B4332] bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
        <Volume2 size={16} />
        Ouvir confirmação
      </button>

      <div className="w-full flex flex-col gap-3 mt-4">
        <button 
          onClick={() => navigate('/')}
          className="pill-button bg-[#1B4332] text-white"
        >
          <Home size={20} />
          Voltar para o início
        </button>
        <button 
          onClick={() => navigate('/ajuda')}
          className="pill-button bg-transparent border-2 border-[#1B4332] text-[#1B4332] shadow-none"
        >
          <MessageSquare size={20} />
          Enviar nova dúvida
        </button>
      </div>

      <div className="mt-8 p-4 bg-white/50 rounded-2xl border border-white/80 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Aviso</p>
        <p className="text-xs text-gray-500 font-medium mt-1 italic">Nossa equipe de suporte técnico está trabalhando para te atender o mais rápido possível.</p>
      </div>
    </div>
  );
};

export default HelpSuccess;