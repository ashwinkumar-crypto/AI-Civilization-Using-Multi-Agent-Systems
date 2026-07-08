import { Bell, Search, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/routePaths";

interface TopNavbarProps {
  isAdmin?: boolean;
}

export default function TopNavbar({ isAdmin }: TopNavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/60 bg-surface/50 px-6 py-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="relative w-80 max-w-full">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder={isAdmin ? "Search users, logs, agents..." : "Search agents, events, logs..."}
            className="w-full rounded-xl border border-border/60 bg-surfaceLight/50 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs text-success sm:flex">
          <Wifi size={12} />
          <span>Simulation Live</span>
        </div>

        <button
          onClick={() => navigate(isAdmin ? ROUTES.ADMIN.DASHBOARD : ROUTES.RESEARCHER.NOTIFICATIONS)}
          className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 text-white/60 hover:text-white"
        >
          <Bell size={16} />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] font-semibold text-white">
            3
          </span>
        </button>
      </div>
    </header>
  );
}