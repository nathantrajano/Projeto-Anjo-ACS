import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Upload } from "lucide-react";

const HelpCenter = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      navigate('/ajuda/sucesso');
    }, 1500);
  };

  return (
    <div className="px-6 flex flex-col gap-6 pb-32 animate-in slide-in-from-left-4 duration-300">
      <div className="flex items-center gap-2 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#1B4332]"><ArrowLeft size={24} /></button>
        <h2 className="text-xl font-extrabold text-[#1B4332]">Central de Ajuda</h2>
      </div>

      <p className="text-gray-500 font-medium -mt-2">Conte-nos o que está acontecendo e nossa equipe entrará em contato.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2">Identificação</label>
          <input 
            type="text" 
            placeholder="Seu nome completo" 
            className="w-full p-4 rounded-2xl bg-white border border-gray-100 font-bold placeholder:text-gray-300 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] transition-all outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2">Local / Unidade</label>
            <input 
              type="text" 
              placeholder="Ex: UBS Centro" 
              className="w-full p-4 rounded-2xl bg-white border border-gray-100 font-bold placeholder:text-gray-300 focus:border-[#1B4332] outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2">Equipe</label>
            <input 
              type="text" 
              placeholder="Ex: 001" 
              className="w-full p-4 rounded-2xl bg-white border border-gray-100 font-bold placeholder:text-gray-300 focus:border-[#1B4332] outline-none"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2">Sua Dúvida ou Problema</label>
          <textarea 
            placeholder="Descreva detalhadamente..." 
            rows={4}
            className="w-full p-4 rounded-2xl bg-white border border-gray-100 font-bold placeholder:text-gray-300 focus:border-[#1B4332] outline-none resize-none"
            required
          />
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 text-center group active:border-[#1B4332] transition-colors">
          <Upload className="text-gray-300 group-active:text-[#1B4332]" />
          <span className="text-sm font-bold text-gray-400 group-active:text-[#1B4332]">Anexar print ou foto</span>
          <span className="text-[10px] text-gray-300 uppercase font-bold">(Opcional)</span>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="pill-button bg-[#1B4332] text-white mt-4"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default HelpCenter;