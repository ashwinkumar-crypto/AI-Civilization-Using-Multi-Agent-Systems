import { useState } from "react";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { eventsData } from "@/data/events.data";
import { formatTimeAgo } from "@/utils/formatters";
import { cn } from "@/utils/cn";
import { Zap } from "lucide-react";

const SEVERITY_STYLES: Record<string, string> = {
  low: "border-white/10 text-white/40",
  medium: "border-warning/30 text-warning",
  high: "border-danger/30 text-danger",
  critical: "border-danger/50 text-danger bg-danger/10",
};

export default function EventsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Event Management</h1>
          <p className="mt-1 text-sm text-white/40">Generate and monitor simulation events.</p>
        </div>
        <Button icon={<Zap size={16} />} onClick={() => setModalOpen(true)}>
          Generate Event
        </Button>
      </div>

      <div className="mt-6 space-y-3">
        {eventsData.slice(0, 30).map((event) => (
          <div key={event.id} className="glass-card flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium text-white">{event.title}</p>
              <p className="mt-1 text-xs text-white/30">{event.category} · {event.affectedZone} · {formatTimeAgo(event.timestamp)}</p>
            </div>
            <span className={cn("rounded-full border px-2.5 py-1 text-xs capitalize", SEVERITY_STYLES[event.severity])}>
              {event.severity}
            </span>
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Generate New Event">
        <p className="text-sm text-white/50">
          Manually trigger a new simulation event. Agents will respond and adapt accordingly.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {["Natural Disaster", "Resource Shortage", "New Mission", "Conflict Event"].map((cat) => (
            <button
              key={cat}
              onClick={() => setModalOpen(false)}
              className="rounded-xl border border-border/60 bg-surfaceLight/40 px-4 py-3 text-xs text-white/70 hover:border-primary/40 hover:text-white"
            >
              {cat}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}