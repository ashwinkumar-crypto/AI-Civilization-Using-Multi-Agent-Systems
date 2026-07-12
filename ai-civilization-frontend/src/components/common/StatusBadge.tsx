import { cn } from "@/utils/cn";
import { AgentStatus } from "@/types/agent.types";

const STATUS_STYLES: Record<AgentStatus, string> = {
  active: "bg-success/10 text-success border-success/30",
  communicating: "bg-primary/10 text-primary-light border-primary/30",
  idle: "bg-warning/10 text-warning border-warning/30",
  resting: "bg-secondary/10 text-secondary-light border-secondary/30",
  offline: "bg-white/5 text-white/40 border-white/10",
};

export default function StatusBadge({ status }: { status: AgentStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium capitalize",
        STATUS_STYLES[status]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}