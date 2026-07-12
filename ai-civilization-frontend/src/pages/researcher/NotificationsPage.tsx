import NotificationPanel from "@/components/notifications/NotificationPanel";

export default function NotificationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Notifications</h1>
      <p className="mt-1 text-sm text-white/40">Alerts and updates from the simulation.</p>
      <div className="mt-6 max-w-2xl">
        <NotificationPanel />
      </div>
    </div>
  );
}