import { agentsData } from "@/data/agents.data";
import { Agent, AgentRole, AgentStatus } from "@/types/agent.types";

const SIMULATED_DELAY = 400;

function delay<T>(value: T, ms = SIMULATED_DELAY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export const agentService = {
  getAll(): Promise<Agent[]> {
    return delay(agentsData);
  },

  getById(id: string): Promise<Agent | undefined> {
    return delay(agentsData.find((a) => a.id === id));
  },

  filter(options: { search?: string; role?: AgentRole | "all"; status?: AgentStatus | "all" }): Promise<Agent[]> {
    const { search = "", role = "all", status = "all" } = options;
    const results = agentsData.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.id.toLowerCase().includes(search.toLowerCase());
      const matchesRole = role === "all" || agent.role === role;
      const matchesStatus = status === "all" || agent.status === status;
      return matchesSearch && matchesRole && matchesStatus;
    });
    return delay(results);
  },

  getByZone(zone: string): Promise<Agent[]> {
    return delay(agentsData.filter((a) => a.location.zone === zone));
  },

  spawn(count: number): Promise<{ spawned: number }> {
    // Dummy mutation — no real backend, just simulates a successful spawn action.
    return delay({ spawned: count }, 600);
  },

  remove(agentIds: string[]): Promise<{ removed: number }> {
    return delay({ removed: agentIds.length }, 600);
  },
};