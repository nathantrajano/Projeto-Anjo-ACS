import { useState } from "react";
import { MANUALS } from "@/data/mockData";
import { Search, FileText, Download, ExternalLink, ChevronRight } from "lucide-react";

const Manual = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredManuals = MANUALS.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 flex flex-col gap-6 pb-32 animate-in slide-in-from-right-4 duration-300">
      <div className="pt-4">
        <h2 className="text-3xl font-extrabold text-[#1B4332]">Manual do ACS</h2>
        <p className="text-gray-500 font-medium mt-1">Biblioteca digital de guias e regulamentos.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar documento..." 
          className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-4 font-bold placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-[#B7E4C7] transition-all"
        />
      </div>

      <div className="flex flex-col gap-4">
        {filteredManuals.map((manual) => (
          <div key={manual.id} className="bg-white p-5 rounded-[2rem] border border-gray-100 flex flex-col gap-4 group active:scale-[0.98] transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#1B4332] shrink-0">
                <FileText size={28} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#B7E4C7] px-2 py-0.5 rounded text-[#1B4332]">{manual.category}</span>
                  <span className="text-[10px] font-bold text-gray-400">{manual.fileSize}</span>
                </div>
                <h3 className="font-extrabold text-[#1B4332] mt-1 text-lg leading-tight">{manual.title}</h3>
                <p className="text-xs text-gray-500 font-medium mt-1 leading-relaxed">{manual.description}</p>
              </div>
            </div>
            
            <div className="flex gap-2 border-t border-gray-50 pt-4">
               <button className="flex-1 bg-emerald-50 hover:bg-emerald-100 py-3 rounded-xl text-[#1B4332] text-xs font-black flex items-center justify-center gap-2 transition-colors">
                  <ExternalLink size={14} />
                  Abrir Arquivo
               </button>
               <button className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#1B4332] transition-colors">
                  <Download size={18} />
               </button>
            </div>
          </div>
        ))}
        
        {filteredManuals.length === 0 && (
          <div className="py-12 text-center">
            <p className="font-bold text-gray-400">Nenhum manual encontrado.</p>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 mt-4 flex items-center justify-between">
         <div className="flex flex-col gap-1">
            <p className="text-xs font-black text-[#1B4332] uppercase opacity-50">Fichas e Formulários</p>
            <p className="text-sm font-bold text-[#1B4332]">Acesse a pasta de downloads</p>
         </div>
         <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center text-white">
            <ChevronRight size={20} />
         </div>
      </div>
    </div>
  );
};

export default Manual;