import { AudioButton } from "./AudioButton";

export const AppHeader = () => {
  return (
    <header className="px-6 pt-8 pb-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-[#1B4332]">Anjo ACS</h1>
      <AudioButton 
        text="Você está no Anjo ACS, seu assistente digital. Como posso ajudar você hoje?" 
        label="Ouvir tudo"
        variant="ghost"
      />
    </header>
  );
};