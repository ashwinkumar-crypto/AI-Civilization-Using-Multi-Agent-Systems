import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { RESEARCHER_NAV } from "@/utils/constants";
import TopNavbar from "./TopNavbar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar navItems={RESEARCHER_NAV} panelLabel="Researcher Console" />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}