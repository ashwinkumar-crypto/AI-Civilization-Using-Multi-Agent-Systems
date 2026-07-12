import { useContext } from "react";
import { NotificationContext } from "@/context/NotificationContext";
import NotificationItem from "./NotificationItem";
import EmptyState from "@/components/common/EmptyState";
import Button from "@/components/common/Button";

export default function NotificationPanel() {
  const ctx = useContext(NotificationContext);
  if (!ctx) return null;
  const { notifications, markAsRead, markAllAsRead, unreadCount } = ctx;

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/50">{unreadCount} unread</p>
        <Button variant="ghost" onClick={markAllAsRead} className="px-3 py-1.5 text-xs">
          Mark all as read
        </Button>
      </div>
      <div className="mt-4 space-y-3">
        {notifications.length === 0 ? (
          <EmptyState message="No notifications yet." />
        ) : (
          notifications.map((n) => <NotificationItem key={n.id} notification={n} onRead={markAsRead} />)
        )}
      </div>
    </div>
  );
}