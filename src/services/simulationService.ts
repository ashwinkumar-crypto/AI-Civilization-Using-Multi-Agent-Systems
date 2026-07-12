import { agentsData } from "@/data/agents.data";
import { resourcesData } from "@/data/resources.data";
import { communicationLogsData } from "@/data/communications.data";
import { SimulationState, SimulationStatus } from "@/types/simulation.types";

const SIMULATED_DELAY = 300;

function delay<T>(value: T, ms = SIMULATED_DELAY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export const simulationService = {
  getState(tick: number, status: SimulationStatus, speed: number): Promise<SimulationState> {
    const active = agentsData.filter((a) => a.status === "active" || a.status === "communicating").length;
    const idle = agentsData.filter((a) => a.status === "idle" || a.status === "resting").length;
    const avgTrust = agentsData.reduce((s, a) => s + a.trustScore, 0) / agentsData.length;
    const avgPerf = agentsData.reduce((s, a) => s + a.performance, 0) / agentsData.length;
    const hours = Math.floor(tick / 60);
    const mins = tick % 60;

    const state: SimulationState = {
      status,
      tick,
      speed,
      elapsedTime: `${hours}h ${mins}m`,
      totalAgents: agentsData.length,
      activeAgents: active,
      idleAgents: idle,
      totalResources: resourcesData.reduce((s, r) => s + r.quantity, 0),
      communicationCount: communicationLogsData.length,
      avgTrustScore: Math.round(avgTrust),
      avgPerformance: Math.round(avgPerf),
    };

    return delay(state);
  },

  start(): Promise<{ status: SimulationStatus }> {
    return delay({ status: "running" as SimulationStatus }, 200);
  },

  pause(): Promise<{ status: SimulationStatus }> {
    return delay({ status: "paused" as SimulationStatus }, 200);
  },

  reset(): Promise<{ status: SimulationStatus; tick: number }> {
    return delay({ status: "stopped" as SimulationStatus, tick: 0 }, 400);
  },
};