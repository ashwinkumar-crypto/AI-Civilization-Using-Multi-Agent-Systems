import { useState } from "react";
import { useEvents } from "@/hooks/useEvents";
import { EventCategory } from "@/types/event.types";
import FilterPanel from "@/components/common/FilterPanel";
import { formatTimeAgo } from "@/utils/formatters";
import { cn } from "@/utils/cn";
import { AlertTriangle } from "lucide-react";

const CATEGORY_OPTIONS = [
  { label: "All Categories", value: "all" },
  ...["Natural Disaster", "Resource Shortage", "New Mission", "Agent Failure", "Weather Change", "Conflict Event"].map((c) => ({ label: c, value: c })),
];

const SEVERITY_STYLES: Record<string, string> = {
  low: "border-white/10 text-white/40",
  medium: "border-warning/30 text-warning",
  high: "border-danger/30 text-danger",
  critical: "border-danger/50 text-danger bg-danger/10",
};

export default function EventMonitorPage() {
  const [category, setCategory] = useState<EventCategory | "all">("all");
  const { events } = useEvents(category);

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Event Monitor</h1>
          <p className="mt-1 text-sm text-white/40">{events.length} events tracked across the simulation timeline.</p>
        </div>
        <FilterPanel label="Category" options={CATEGORY_OPTIONS} value={category} onChange={(v) => setCategory(v as EventCategory | "all")} />
      </div>

      <div className="mt-6 space-y-3">
        {events.slice(0, 40).map((event) => (
          <div key={event.id} className="glass-card flex items-start gap-4 p-4">
            <div className={cn("mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border", SEVERITY_STYLES[event.severity])}>
              <AlertTriangle size={16} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-medium text-white">{event.title}</p>
                <span className={cn("rounded-full border px-2 py-0.5 text-[10px] capitalize", SEVERITY_STYLES[event.severity])}>
                  {event.severity}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/50">{event.description}</p>
              <p className="mt-2 text-xs text-white/30">
                {event.category} · {event.affectedZone} · {event.affectedAgents} agents affected · {formatTimeAgo(event.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}