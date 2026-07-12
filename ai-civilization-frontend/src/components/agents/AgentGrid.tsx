import { Agent } from "@/types/agent.types";
import AgentCard from "./AgentCard";
import EmptyState from "@/components/common/EmptyState";

interface AgentGridProps {
  agents: Agent[];
  onSelect: (agent: Agent) => void;
}

export default function AgentGrid({ agents, onSelect }: AgentGridProps) {
  if (agents.length === 0) return <EmptyState message="No agents match your filters." />;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} onClick={() => onSelect(agent)} />
      ))}
    </div>
  );
}
