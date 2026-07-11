import { Play, Pause, RotateCcw, Gauge } from "lucide-react";
import { useSimulation } from "@/hooks/useSimulation";
import { cn } from "@/utils/cn";

const SPEEDS = [1, 2, 4];

export default function SimulationControls() {
  const { state, start, pause, reset, setSpeed } = useSimulation();

  return (
    <div className="glass-card flex flex-wrap items-center justify-between gap-4 p-5">
      <div className="flex items-center gap-3">
        <button
          onClick={start}
          disabled={state.status === "running"}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-success to-accent px-4 py-2.5 text-sm font-medium text-white transition-all hover:shadow-glow disabled:opacity-40"
        >
          <Play size={16} /> Start
        </button>
        <button
          onClick={pause}
          disabled={state.status !== "running"}
          className="flex items-center gap-2 rounded-xl border border-warning/30 bg-warning/10 px-4 py-2.5 text-sm font-medium text-warning transition-all hover:bg-warning/20 disabled:opacity-40"
        >
          <Pause size={16} /> Pause
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-xl border border-danger/30 bg-danger/10 px-4 py-2.5 text-sm font-medium text-danger transition-all hover:bg-danger/20"
        >
          <RotateCcw size={16} /> Reset
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-white/40">
          <Gauge size={14} /> Speed
        </div>
        <div className="flex gap-1 rounded-xl border border-border/60 bg-surfaceLight/40 p-1">
          {SPEEDS.map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                state.speed === s ? "bg-gradient-to-r from-primary to-secondary text-white" : "text-white/50 hover:text-white"
              )}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-white/40">
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            state.status === "running" ? "animate-pulse bg-success" : state.status === "paused" ? "bg-warning" : "bg-white/20"
          )}
        />
        Status: <span className="capitalize text-white/70">{state.status}</span>
        <span className="ml-2 border-l border-border pl-2 font-mono">Tick {state.tick}</span>
      </div>
    </div>
  );
}
