import {
  LayoutDashboard,
  Activity,
  Users,
  Network,
  Boxes,
  CalendarClock,
  BarChart3,
  Bell,
  UserCircle,
  Settings,
  ShieldCheck,
  PlayCircle,
  Globe2,
  ListChecks,
  ScrollText,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";
import { ROUTES } from "@/routes/routePaths";

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const RESEARCHER_NAV: NavItem[] = [
  { label: "Overview", path: ROUTES.RESEARCHER.OVERVIEW, icon: LayoutDashboard },
  { label: "Simulation", path: ROUTES.RESEARCHER.SIMULATION, icon: Activity },
  { label: "Agents", path: ROUTES.RESEARCHER.AGENTS, icon: Users },
  { label: "Communication", path: ROUTES.RESEARCHER.COMMUNICATION, icon: Network },
  { label: "Resources", path: ROUTES.RESEARCHER.RESOURCES, icon: Boxes },
  { label: "Events", path: ROUTES.RESEARCHER.EVENTS, icon: CalendarClock },
  { label: "Analytics", path: ROUTES.RESEARCHER.ANALYTICS, icon: BarChart3 },
  { label: "Notifications", path: ROUTES.RESEARCHER.NOTIFICATIONS, icon: Bell },
  { label: "Profile", path: ROUTES.RESEARCHER.PROFILE, icon: UserCircle },
  { label: "Settings", path: ROUTES.RESEARCHER.SETTINGS, icon: Settings },
];

export const ADMIN_NAV: NavItem[] = [
  { label: "Dashboard", path: ROUTES.ADMIN.DASHBOARD, icon: LayoutDashboard },
  { label: "Simulation Control", path: ROUTES.ADMIN.SIMULATION_CONTROL, icon: PlayCircle },
  { label: "Agent Management", path: ROUTES.ADMIN.AGENTS, icon: Users },
  { label: "Environment", path: ROUTES.ADMIN.ENVIRONMENT, icon: Globe2 },
  { label: "Task Manager", path: ROUTES.ADMIN.TASKS, icon: ListChecks },
  { label: "Events", path: ROUTES.ADMIN.EVENTS, icon: CalendarClock },
  { label: "Users", path: ROUTES.ADMIN.USERS, icon: ShieldCheck },
  { label: "Logs", path: ROUTES.ADMIN.LOGS, icon: ScrollText },
  { label: "System Health", path: ROUTES.ADMIN.SYSTEM_HEALTH, icon: HeartPulse },
  { label: "Settings", path: ROUTES.ADMIN.SETTINGS, icon: Settings },
];

export const APP_NAME = "AI Civilization";
export const APP_TAGLINE = "Self-Organizing Multi-Agent Intelligence";