import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Listening from "./pages/Listening";
import IntentSelection from "./pages/IntentSelection";
import Confirmation from "./pages/Confirmation";
import GuideSteps from "./pages/GuideSteps";
import HelpCenter from "./pages/HelpCenter";
import HelpSuccess from "./pages/HelpSuccess";
import Motivational from "./pages/Motivational";
import SuccessGuide from "./pages/SuccessGuide";
import Manual from "./pages/Manual";
import NotFound from "./pages/NotFound";
import { AppHeader } from "./components/AppHeader";
import { BottomNav } from "./components/BottomNav";

const queryClient = new QueryClient();

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideHeaderPaths = ['/confirmacao', '/ouvir', '/sucesso-guia'];
  const hideBottomNavPaths = ['/ouvir', '/ajuda/sucesso', '/sucesso-guia'];
  
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);
  const shouldHideBottomNav = hideBottomNavPaths.some(path => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-[#F0F7F0] pb-24 relative shadow-2xl">
      {!shouldHideHeader && <AppHeader />}
      <main className="flex-1">
        {children}
      </main>
      {!shouldHideBottomNav && <BottomNav />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ouvir" element={<Listening />} />
            <Route path="/selecionar-intencao" element={<IntentSelection />} />
            <Route path="/confirmacao" element={<Confirmation />} />
            <Route path="/guia/:id" element={<GuideSteps />} />
            <Route path="/sucesso-guia" element={<SuccessGuide />} />
            <Route path="/ajuda" element={<HelpCenter />} />
            <Route path="/ajuda/sucesso" element={<HelpSuccess />} />
            <Route path="/motivacional" element={<Motivational />} />
            <Route path="/manual" element={<Manual />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;