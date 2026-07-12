export type EventCategory =
  | "Natural Disaster"
  | "Resource Shortage"
  | "New Mission"
  | "Agent Failure"
  | "Weather Change"
  | "Conflict Event";

export type EventSeverity = "low" | "medium" | "high" | "critical";

export interface SimulationEvent {
  id: string;
  category: EventCategory;
  title: string;
  description: string;
  severity: EventSeverity;
  timestamp: string;
  affectedZone: string;
  affectedAgents: number;
}