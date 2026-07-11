import { createContext, ReactNode, useState } from "react";
import { randomPastTimestamp, seededId } from "@/utils/randomGenerators";

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "error";
  timestamp: string;
  read: boolean;
}

interface NotificationContextValue {
  notifications: AppNotification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

export const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

const INITIAL: AppNotification[] = [
  { id: seededId("NTF", 1), title: "Resource Shortage", message: "Energy levels in North Ridge dropped below 20%.", type: "warning", timestamp: randomPastTimestamp(6), read: false },
  { id: seededId("NTF", 2), title: "New Alliance Formed", title2: undefined as unknown as never, message: "Agent AGT-014 and AGT-027 formed a trade alliance.", type: "success", timestamp: randomPastTimestamp(10), read: false },
  { id: seededId("NTF", 3), title: "Agent Failure", message: "AGT-039 became unresponsive during a scouting task.", type: "error", timestamp: randomPastTimestamp(14), read: false },
  { id: seededId("NTF", 4), title: "Simulation Checkpoint", message: "Simulation state saved successfully at tick 1200.", type: "info", timestamp: randomPastTimestamp(20), read: true },
  { id: seededId("NTF", 5), title: "Weather Change", message: "A storm system is approaching Coastal Bay.", type: "warning", timestamp: randomPastTimestamp(30), read: true },
];

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<AppNotification[]>(INITIAL);

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, markAsRead, markAllAsRead }}>
      {children}
    </NotificationContext.Provider>
  );
}