import { AppNotification } from "@/context/NotificationContext";
import { formatTimeAgo } from "@/utils/formatters";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "@/utils/cn";

const ICONS = { info: Info, warning: AlertTriangle, success: CheckCircle2, error: XCircle };
const COLORS = { info: "text-primary-light", warning: "text-warning", success: "text-success", error: "text-danger" };

interface NotificationItemProps {
  notification: AppNotification;
  onRead: (id: string) => void;
}

export default function NotificationItem({ notification, onRead }: NotificationItemProps) {
  const Icon = ICONS[notification.type];

  return (
    <button
      onClick={() => onRead(notification.id)}
      className={cn(
        "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors",
        notification.read ? "border-border/40 bg-transparent" : "border-primary/30 bg-primary/5"
      )}
    >
      <Icon size={18} className={cn("mt-0.5 shrink-0", COLORS[notification.type])} />
      <div className="flex-1">
        <p className="text-sm font-medium text-white">{notification.title}</p>
        <p className="mt-0.5 text-sm text-white/50">{notification.message}</p>
        <p className="mt-1.5 text-xs text-white/30">{formatTimeAgo(notification.timestamp)}</p>
      </div>
      {!notification.read && <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />}
    </button>
  );
}