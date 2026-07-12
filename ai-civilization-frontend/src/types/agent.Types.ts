export type AgentStatus = "active" | "idle" | "communicating" | "resting" | "offline";
export type AgentRole = "Leader" | "Trader" | "Builder" | "Scout" | "Diplomat" | "Guardian" | "Gatherer" | "Healer";

export interface AgentMemoryEntry {
  id: string;
  timestamp: string;
  summary: string;
}

export interface AgentSkill {
  name: string;
  level: number; // 0-100
}

export interface AgentDecision {
  id: string;
  timestamp: string;
  action: string;
  reasoning: string;
  outcome: "success" | "failure" | "neutral";
}

export interface AgentCommunicationRecord {
  id: string;
  withAgentId: string;
  timestamp: string;
  type: "message" | "trade" | "alliance" | "conflict";
  summary: string;
}

export interface TrustRelation {
  agentId: string;
  trustScore: number; // 0-100
}

export interface Agent {
  id: string;
  name: string;
  role: AgentRole;
  status: AgentStatus;
  energy: number;
  trustScore: number;
  health: number;
  currentTask: string;
  location: { x: number; y: number; zone: string };
  performance: number;
  memory: AgentMemoryEntry[];
  skills: AgentSkill[];
  recentDecisions: AgentDecision[];
  communicationHistory: AgentCommunicationRecord[];
  trustNetwork: TrustRelation[];
  createdAt: string;
}