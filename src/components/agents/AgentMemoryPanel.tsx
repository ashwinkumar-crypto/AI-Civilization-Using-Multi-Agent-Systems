import { AgentMemoryEntry } from "@/types/agent.types";
import { formatTimeAgo } from "@/utils/formatters";
import { BrainCog } from "lucide-react";

export default function AgentMemoryPanel({ memory }: { memory: AgentMemoryEntry[] }) {
  return (
    <div className="space-y-3">
      {memory.map((m) => (
        <div key={m.id} className="flex gap-3 rounded-xl border border-border/50 bg-surfaceLight/30 p-3">
          <BrainCog size={16} className="mt-0.5 shrink-0 text-secondary-light" />
          <div>
            <p className="text-sm text-white/80">{m.summary}</p>
            <p className="mt-1 text-xs text-white/30">{formatTimeAgo(m.timestamp)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
