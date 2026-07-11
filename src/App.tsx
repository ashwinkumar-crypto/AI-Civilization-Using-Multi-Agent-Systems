import { AuthProvider } from "@/context/AuthContext";
import { SimulationProvider } from "@/context/SimulationContext";
import { NotificationProvider } from "@/context/NotificationContext";
import AppRoutes from "@/routes/AppRoutes";

export default function App() {
  return (
    <AuthProvider>
      <SimulationProvider>
        <NotificationProvider>
          <AppRoutes />
        </NotificationProvider>
      </SimulationProvider>
    </AuthProvider>
  );
}