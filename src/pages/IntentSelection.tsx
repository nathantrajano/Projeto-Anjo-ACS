import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES, INTENTS } from "@/data/mockData";
import { searchGuides } from "@/utils/decisionEngine";
import { GuideSearchResult } from "@/types";
import {
  ArrowLeft,
  ChevronRight,
  Tablet,
  Home,
  UserPlus,
  FileText,
  Search,
  X,
} from "lucide-react";

const iconMap: Record<string, typeof FileText> = {
  UserPlus,
  Home,
  Tablet,
  FileText,
};

const IntentSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = (location.state as {
    fallbackText?: string;
    suggestedResults?: GuideSearchResult[];
  } | null) ?? null;

  const fallbackText = routeState?.fallbackText ?? "";
  const [searchQuery, setSearchQuery] = useState(fallbackText);

  const searchResults = useMemo(() => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return [];
    if (trimmed === fallbackText.trim() && routeState?.suggestedResults?.length) {
      return routeState.suggestedResults;
    }
    return searchGuides(trimmed, 8);
  }, [searchQuery, fallbackText, routeState?.suggestedResults]);

  const handleSelectIntent = (intentId: string) => {
    const intent = INTENTS.find((i) => i.id === intentId);
    if (intent) {
      navigate("/confirmacao", { state: { intent } });
    }
  };

  const handleSelectSearchResult = (result: GuideSearchResult) => {
    navigate("/confirmacao", { state: { intent: result.intent } });
  };

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="px-6 flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300">
      <div className="flex items-center gap-2 pt-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[#1B4332]">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-extrabold text-[#1B4332]">Qual a sua dúvida?</h2>
      </div>

      {fallbackText && (
        <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
          <p className="text-xs font-bold text-[#1B4332] uppercase opacity-50 mb-1">
            Você disse:
          </p>
          <p className="text-[#1B4332] font-bold italic">"{fallbackText}"</p>
        </div>
      )}

      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por título, assunto ou passo do guia..."
          className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-10 text-sm font-bold text-[#1B4332] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#B7E4C7] transition-all shadow-xs"
        />
        {isSearching && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="Limpar busca"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-[#1B4332]"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3 pb-32">
        {isSearching ? (
          searchResults.length > 0 ? (
            <div className="flex flex-col gap-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#2D6A4F] px-1">
                Guias sugeridos ({searchResults.length})
              </p>
              {searchResults.map((result) => (
                <button
                  key={result.guide.id}
                  onClick={() => handleSelectSearchResult(result)}
                  className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between gap-3 text-left group active:scale-[0.98] transition-all shadow-xs"
                >
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-[#B7E4C7]/60 text-[#1B4332] px-2 py-0.5 rounded mb-1.5">
                      {result.guide.category}
                    </span>
                    <p className="font-bold text-[#1B4332] leading-snug">
                      {result.guide.title}
                    </p>
                    <p className="text-xs text-gray-500 font-medium mt-1 line-clamp-2">
                      {result.guide.summary}
                    </p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-gray-300 group-hover:text-[#1B4332] transition-colors shrink-0"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center flex flex-col gap-2">
              <p className="font-bold text-[#1B4332]">
                Nenhum guia encontrado para essa busca.
              </p>
              <p className="text-xs text-gray-500">
                Tente outras palavras ou limpe a busca para ver todas as categorias.
              </p>
            </div>
          )
        ) : (
          CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || FileText;
            return (
              <div key={cat.id} className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-2 mt-4">
                  <Icon size={20} className="text-[#2D6A4F]" />
                  <h3 className="font-extrabold text-[#1B4332] text-sm uppercase tracking-wider">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {cat.intents.length > 0 ? (
                    cat.intents.map((intentId) => {
                      const intent = INTENTS.find((i) => i.id === intentId);
                      return (
                        <button
                          key={intentId}
                          onClick={() => handleSelectIntent(intentId)}
                          className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between group active:scale-[0.98] transition-all"
                        >
                          <span className="font-bold text-[#1B4332]">
                            {intent?.title}
                          </span>
                          <ChevronRight
                            size={18}
                            className="text-gray-300 group-hover:text-[#1B4332] transition-colors"
                          />
                        </button>
                      );
                    })
                  ) : (
                    <button
                      onClick={() => navigate("/manual")}
                      className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between opacity-60"
                    >
                      <span className="font-bold text-[#1B4332]">
                        Ver manuais desta categoria
                      </span>
                      <ChevronRight size={18} className="text-gray-300" />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default IntentSelection;
