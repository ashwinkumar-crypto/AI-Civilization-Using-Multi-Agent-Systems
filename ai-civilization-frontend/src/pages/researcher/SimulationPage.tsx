import SimulationCanvas from "@/components/simulation/SimulationCanvas";
import SimulationControls from "@/components/simulation/SimulationControls";
import { useSimulation } from "@/hooks/useSimulation";
import { Users, Boxes, ShieldCheck, Gauge } from "lucide-react";

export default function SimulationPage() {
  const { state } = useSimulation();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Simulation</h1>
      <p className="mt-1 text-sm text-white/40">
        Live map of agent positions, zones, and civilization activity.
      </p>

      <div className="mt-6">
        <SimulationControls />
      </div>

      <div className="mt-6">
        <SimulationCanvas />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { icon: Users, label: "Agents Tracked", value: state.totalAgents },
          { icon: Boxes, label: "Resources in Play", value: state.totalResources.toLocaleString() },
          { icon: ShieldCheck, label: "Avg. Trust", value: state.avgTrustScore },
          { icon: Gauge, label: "Avg. Performance", value: `${state.avgPerformance}%` },
        ].map((s) => (
          <div key={s.label} className="glass-card p-5">
            <s.icon size={18} className="text-primary-light" />
            <p className="mt-3 text-xl font-bold text-white">{s.value}</p>
            <p className="mt-1 text-xs text-white/40">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}git