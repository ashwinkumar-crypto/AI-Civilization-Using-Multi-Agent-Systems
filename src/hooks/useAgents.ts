import { useMemo, useState } from "react";
import { agentsData } from "@/data/agents.data";
import { Agent, AgentRole, AgentStatus } from "@/types/agent.types";

interface UseAgentsOptions {
  searchTerm?: string;
  roleFilter?: AgentRole | "all";
  statusFilter?: AgentStatus | "all";
}

export function useAgents({ searchTerm = "", roleFilter = "all", statusFilter = "all" }: UseAgentsOptions = {}) {
  const [agents] = useState<Agent[]>(agentsData);

  const filtered = useMemo(() => {
    return agents.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = roleFilter === "all" || agent.role === roleFilter;
      const matchesStatus = statusFilter === "all" || agent.status === statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [agents, searchTerm, roleFilter, statusFilter]);

  return { agents: filtered, allAgents: agents };
}