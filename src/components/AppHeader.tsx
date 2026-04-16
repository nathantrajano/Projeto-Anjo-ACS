import { Volume2 } from "lucide-react";

export const AppHeader = () => {
  return (
    <header className="px-6 pt-8 pb-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-[#1B4332]">Anjo ACS</h1>
      <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#B7E4C7] px-3 py-1.5 rounded-full">
        <Volume2 size={14} />
        Ouvir tudo
      </button>
    </header>
  );
};