import { useNavigate } from "react-router-dom";
import { CheckCircle2, Home, MessageSquare } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";

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

      <AudioButton 
        text="Sua mensagem foi enviada. Responderemos em breve. Obrigado." 
        label="Ouvir confirmação"
        variant="ghost"
      />

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
    </div>
  );
};

export default HelpSuccess;