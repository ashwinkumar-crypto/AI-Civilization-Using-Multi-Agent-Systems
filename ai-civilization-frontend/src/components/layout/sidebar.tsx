import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { NavItem, APP_NAME } from "@/utils/constants";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/routes/routePaths";

interface SidebarProps {
  navItems: NavItem[];
  panelLabel: string;
}

export default function Sidebar({ navItems, panelLabel }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen flex-col border-r border-border/60 bg-surface/60 backdrop-blur-xl transition-all duration-300",
        collapsed ? "w-20" : "w-72"
      )}
    >
      <div className="flex items-center justify-between px-5 py-6">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-glow">
            <Sparkles size={18} className="text-white" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{APP_NAME}</p>
              <p className="truncate text-xs text-white/40">{panelLabel}</p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setCollapsed((v) => !v)}
        className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surfaceLight text-white/60 hover:text-white"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                isActive
                  ? "bg-gradient-to-r from-primary/20 to-secondary/10 text-white border border-primary/30"
                  : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
              )
            }
          >
            <item.icon size={18} className="shrink-0" />
            {!collapsed && <span className="truncate">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-border/60 p-3">
        <div className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5", !collapsed && "bg-white/5")}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-sm font-semibold">
            {user?.name?.charAt(0) ?? "U"}
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{user?.name}</p>
              <p className="truncate text-xs text-white/40">{user?.role}</p>
            </div>
          )}
          <button onClick={handleLogout} className="text-white/40 hover:text-danger" title="Log out">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}