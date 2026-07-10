export type SimulationStatus = "running" | "paused" | "stopped";

export interface SimulationState {
  status: SimulationStatus;
  tick: number;
  speed: number; // 1x, 2x, 4x
  elapsedTime: string;
  totalAgents: number;
  activeAgents: number;
  idleAgents: number;
  totalResources: number;
  communicationCount: number;
  avgTrustScore: number;
  avgPerformance: number;
}

export interface PerformanceDataPoint {
  tick: number;
  label: string;
  performance: number;
  trust: number;
  communicationEfficiency: number;
  leadership: number;
}