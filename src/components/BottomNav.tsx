import { Home, HelpCircle, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
  const location = useLocation();
  
  const NavItem = ({ to, icon: Icon, label, center = false }: { to: string, icon: any, label: string, center?: boolean }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    
    return (
      <Link 
        to={to} 
        className={cn(
          "flex flex-col items-center justify-center transition-all",
          center ? "-mt-8" : "pb-1"
        )}
      >
        <div className={cn(
          "flex items-center justify-center transition-all",
          center 
            ? "w-16 h-16 bg-[#1B4332] text-white rounded-full shadow-xl" 
            : isActive ? "text-[#1B4332]" : "text-gray-400"
        )}>
          <Icon size={center ? 32 : 24} strokeWidth={isActive ? 2.5 : 2} />
        </div>
        {!center && (
          <span className={cn(
            "text-[10px] font-bold mt-1 uppercase tracking-tighter",
            isActive ? "text-[#1B4332]" : "text-gray-400"
          )}>
            {label}
          </span>
        )}
      </Link>
    );
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 h-20 flex justify-between items-center safe-bottom z-50">
      <NavItem to="/ajuda" icon={HelpCircle} label="Ajuda" />
      <NavItem to="/" icon={Home} label="Início" center />
      <NavItem to="/manual" icon={BookOpen} label="Manual" />
    </nav>
  );
};