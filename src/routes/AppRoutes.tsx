import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routePaths";
import ProtectedRoute from "./ProtectedRoute";

// Layouts
import DashboardLayout from "@/components/layout/DashboardLayout";
import AdminLayout from "@/components/layout/AdminLayout";

// Public pages
import LandingPage from "@/pages/landing/LandingPage";
import LoginPage from "@/pages/auth/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";

// Researcher pages
import OverviewPage from "@/pages/researcher/OverviewPage";
import SimulationPage from "@/pages/researcher/SimulationPage";
import AgentManagementPage from "@/pages/researcher/AgentManagementPage";
import CommunicationPage from "@/pages/researcher/CommunicationPage";
import ResourceManagementPage from "@/pages/researcher/ResourceManagementPage";
import EventMonitorPage from "@/pages/researcher/EventMonitorPage";
import AnalyticsPage from "@/pages/researcher/AnalyticsPage";
import NotificationsPage from "@/pages/researcher/NotificationsPage";
import ProfilePage from "@/pages/researcher/ProfilePage";
import SettingsPage from "@/pages/researcher/SettingsPage";

// Admin pages
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import SimulationControlPage from "@/pages/admin/SimulationControlPage";
import AdminAgentManagementPage from "@/pages/admin/AgentManagementPage";
import EnvironmentManagerPage from "@/pages/admin/EnvironmentManagerPage";
import TaskManagerPage from "@/pages/admin/TaskManagerPage";
import EventsPage from "@/pages/admin/EventsPage";
import UsersPage from "@/pages/admin/UsersPage";
import LogsPage from "@/pages/admin/LogsPage";
import SystemHealthPage from "@/pages/admin/SystemHealthPage";
import AdminSettingsPage from "@/pages/admin/AdminSettingsPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path={ROUTES.HOME} element={<LandingPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />

      {/* Researcher — protected */}
      <Route element={<ProtectedRoute allowedRole="researcher" />}>
        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.RESEARCHER.OVERVIEW} element={<OverviewPage />} />
          <Route path={ROUTES.RESEARCHER.SIMULATION} element={<SimulationPage />} />
          <Route path={ROUTES.RESEARCHER.AGENTS} element={<AgentManagementPage />} />
          <Route path={ROUTES.RESEARCHER.COMMUNICATION} element={<CommunicationPage />} />
          <Route path={ROUTES.RESEARCHER.RESOURCES} element={<ResourceManagementPage />} />
          <Route path={ROUTES.RESEARCHER.EVENTS} element={<EventMonitorPage />} />
          <Route path={ROUTES.RESEARCHER.ANALYTICS} element={<AnalyticsPage />} />
          <Route path={ROUTES.RESEARCHER.NOTIFICATIONS} element={<NotificationsPage />} />
          <Route path={ROUTES.RESEARCHER.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.RESEARCHER.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>

      {/* Admin — protected */}
      <Route element={<ProtectedRoute allowedRole="admin" />}>
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN.DASHBOARD} element={<AdminDashboardPage />} />
          <Route path={ROUTES.ADMIN.SIMULATION_CONTROL} element={<SimulationControlPage />} />
          <Route path={ROUTES.ADMIN.AGENTS} element={<AdminAgentManagementPage />} />
          <Route path={ROUTES.ADMIN.ENVIRONMENT} element={<EnvironmentManagerPage />} />
          <Route path={ROUTES.ADMIN.TASKS} element={<TaskManagerPage />} />
          <Route path={ROUTES.ADMIN.EVENTS} element={<EventsPage />} />
          <Route path={ROUTES.ADMIN.USERS} element={<UsersPage />} />
          <Route path={ROUTES.ADMIN.LOGS} element={<LogsPage />} />
          <Route path={ROUTES.ADMIN.SYSTEM_HEALTH} element={<SystemHealthPage />} />
          <Route path={ROUTES.ADMIN.SETTINGS} element={<AdminSettingsPage />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}