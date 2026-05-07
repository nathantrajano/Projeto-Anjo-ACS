import { useState, useRef } from "react";
import { Camera, Upload, ArrowLeft, Scan, ArrowRight, Loader2, FileText, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createWorker } from "tesseract.js";
import { resolveIntent } from "@/utils/decisionEngine";
import { showSuccess, showError } from "@/utils/toast";

const OCRScanner = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        processImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async (imageSrc: string) => {
    setIsProcessing(true);
    setProgress(0);
    setText("");

    try {
      const worker = await createWorker('por', 1, {
        logger: m => {
          if (m.status === 'recognizing text') {
            setProgress(Math.round(m.progress * 100));
          }
        }
      });
      
      const { data: { text: resultText } } = await worker.recognize(imageSrc);
      await worker.terminate();
      
      setText(resultText);
      showSuccess("Texto extraído com sucesso!");
    } catch (err) {
      console.error(err);
      showError("Não foi possível ler a imagem. Tente uma foto mais nítida.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleProceed = () => {
    if (!text.trim()) return;
    
    const intent = resolveIntent(text);
    if (intent) {
      navigate('/confirmacao', { state: { intent } });
    } else {
      navigate('/selecionar-intencao', { state: { fallbackText: text } });
    }
  };

  const reset = () => {
    setImage(null);
    setText("");
    setProgress(0);
  };

  return (
    <div className="px-6 flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300 pb-32">
      <div className="flex items-center gap-2 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#1B4332]"><ArrowLeft size={24} /></button>
        <h2 className="text-xl font-extrabold text-[#1B4332]">Ler Documento</h2>
      </div>

      {!image ? (
        <div className="flex flex-col gap-4">
          <div className="text-center py-4">
            <p className="text-gray-500 font-medium">Tire uma foto de uma ficha, manual ou erro na tela para o Anjo ajudar você.</p>
          </div>
          
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="glass-card flex flex-col items-center justify-center gap-4 py-16 border-2 border-dashed border-emerald-200 hover:border-[#1B4332] transition-all group"
          >
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-[#1B4332] group-hover:scale-110 transition-transform">
              <Camera size={32} />
            </div>
            <div className="text-center">
              <span className="block font-black text-[#1B4332] text-lg">Tirar Foto ou Abrir Imagem</span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Formatos: JPG, PNG</span>
            </div>
          </button>
          
          <input 
            type="file" 
            accept="image/*" 
            capture="environment"
            className="hidden" 
            ref={fileInputRef}
            onChange={handleImageUpload}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
          <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl max-h-64">
            <img src={image} alt="Captura" className="w-full h-full object-cover" />
            {isProcessing && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-6">
                <Loader2 size={40} className="animate-spin mb-4" />
                <span className="font-black text-xl mb-1">Analisando...</span>
                <div className="w-full bg-white/20 h-2 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="bg-emerald-400 h-full transition-all duration-300" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="text-[10px] uppercase font-bold mt-2 tracking-widest">{progress}% concluído</span>
              </div>
            )}
            <button 
              onClick={reset}
              className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white"
            >
              <RefreshCw size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-2">
              <Scan size={16} className="text-[#2D6A4F]" />
              <label className="text-xs font-black uppercase tracking-wider text-gray-400">Texto Detectado</label>
            </div>
            <div className="glass-card bg-white min-h-[120px] p-4 border-2 border-emerald-50">
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold text-[#1B4332] resize-none leading-relaxed"
                rows={5}
                placeholder={isProcessing ? "Aguarde a leitura..." : "O texto lido aparecerá aqui para você editar se necessário."}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={handleProceed}
              disabled={!text.trim() || isProcessing}
              className="pill-button bg-[#1B4332] text-white disabled:opacity-30"
            >
              Usar como comando
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={reset}
              className="pill-button bg-transparent border-2 border-[#1B4332] text-[#1B4332] shadow-none"
            >
              Tentar outra foto
            </button>
          </div>
        </div>
      )}

      <div className="bg-emerald-50 p-5 rounded-3xl border border-emerald-100 flex items-start gap-4">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#1B4332] shrink-0 shadow-sm">
          <FileText size={20} />
        </div>
        <div>
          <h4 className="text-sm font-black text-[#1B4332]">Dica do Anjo</h4>
          <p className="text-xs text-[#2D6A4F] font-medium leading-relaxed mt-1">
            Fotos bem iluminadas e de perto ajudam a identificar melhor os termos técnicos do e-SUS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OCRScanner;