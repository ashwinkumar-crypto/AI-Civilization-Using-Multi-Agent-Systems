import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { SimulationState, SimulationStatus } from "@/types/simulation.types";
import { agentsData } from "@/data/agents.data";
import { resourcesData } from "@/data/resources.data";
import { communicationLogsData } from "@/data/communications.data";

interface SimulationContextValue {
  state: SimulationState;
  start: () => void;
  pause: () => void;
  reset: () => void;
  setSpeed: (speed: number) => void;
}

export const SimulationContext = createContext<SimulationContextValue | undefined>(undefined);

function computeBaseState(): Omit<SimulationState, "status" | "tick" | "speed" | "elapsedTime"> {
  const active = agentsData.filter((a) => a.status === "active" || a.status === "communicating").length;
  const idle = agentsData.filter((a) => a.status === "idle" || a.status === "resting").length;
  const avgTrust = agentsData.reduce((s, a) => s + a.trustScore, 0) / agentsData.length;
  const avgPerf = agentsData.reduce((s, a) => s + a.performance, 0) / agentsData.length;

  return {
    totalAgents: agentsData.length,
    activeAgents: active,
    idleAgents: idle,
    totalResources: resourcesData.reduce((s, r) => s + r.quantity, 0),
    communicationCount: communicationLogsData.length,
    avgTrustScore: Math.round(avgTrust),
    avgPerformance: Math.round(avgPerf),
  };
}

export function SimulationProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<SimulationStatus>("running");
  const [tick, setTick] = useState(1284);
  const [speed, setSpeedState] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (status === "running") {
      intervalRef.current = setInterval(() => {
        setTick((t) => t + speed);
      }, 1500);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [status, speed]);

  const start = () => setStatus("running");
  const pause = () => setStatus("paused");
  const reset = () => {
    setStatus("stopped");
    setTick(0);
  };
  const setSpeed = (s: number) => setSpeedState(s);

  const base = computeBaseState();
  const hours = Math.floor(tick / 60);
  const mins = tick % 60;

  const state: SimulationState = {
    status,
    tick,
    speed,
    elapsedTime: `${hours}h ${mins}m`,
    ...base,
  };

  return (
    <SimulationContext.Provider value={{ state, start, pause, reset, setSpeed }}>
      {children}
    </SimulationContext.Provider>
  );
}