import { useState } from "react";
import { agentsData } from "@/data/agents.data";
import { Agent } from "@/types/agent.types";
import AgentMarker from "./AgentMarker";
import EnvironmentOverlay from "./EnvironmentOverlay";
import AgentProfileDrawer from "@/components/agents/AgentProfileDrawer";

export default function SimulationCanvas() {
  const [selected, setSelected] = useState<Agent | null>(null);

  return (
    <div className="glass-card relative aspect-[16/9] w-full overflow-hidden p-0">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-[100px]" />

      <div className="relative h-full w-full">
        <EnvironmentOverlay />
        {agentsData.map((agent) => (
          <AgentMarker key={agent.id} agent={agent} onClick={() => setSelected(agent)} />
        ))}
      </div>

      <div className="absolute bottom-4 left-4 flex flex-wrap gap-3 rounded-xl bg-black/40 px-4 py-2 text-[10px] text-white/50 backdrop-blur">
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-success" /> Active</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Communicating</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-warning" /> Idle</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-secondary" /> Resting</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-white/20" /> Offline</span>
      </div>

      <span className="absolute top-4 right-4 rounded-full bg-black/40 px-3 py-1 text-[10px] text-white/50 backdrop-blur">
        {agentsData.length} agents on map
      </span>

      <AgentProfileDrawer agent={selected} onClose={() => setSelected(null)} />
    </div>
  );
}