import { useState } from "react";
import { useAgents } from "@/hooks/useAgents";
import { useDebounce } from "@/hooks/useDebounce";
import { Agent, AgentRole, AgentStatus } from "@/types/agent.types";
import SearchBar from "@/components/common/SearchBar";
import FilterPanel from "@/components/common/FilterPanel";
import AgentGrid from "@/components/agents/AgentGrid";
import AgentProfileDrawer from "@/components/agents/AgentProfileDrawer";

const ROLE_OPTIONS = [
  { label: "All Roles", value: "all" },
  ...["Leader", "Trader", "Builder", "Scout", "Diplomat", "Guardian", "Gatherer", "Healer"].map((r) => ({ label: r, value: r })),
];

const STATUS_OPTIONS = [
  { label: "All Statuses", value: "all" },
  ...["active", "idle", "communicating", "resting", "offline"].map((s) => ({ label: s, value: s })),
];

export default function AgentManagementPage() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState<AgentRole | "all">("all");
  const [status, setStatus] = useState<AgentStatus | "all">("all");
  const [selected, setSelected] = useState<Agent | null>(null);
  const debouncedSearch = useDebounce(search);

  const { agents } = useAgents({ searchTerm: debouncedSearch, roleFilter: role, statusFilter: status });

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Agent Management</h1>
          <p className="mt-1 text-sm text-white/40">{agents.length} of 50 agents shown</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search by name or ID..." />
        <FilterPanel label="Role" options={ROLE_OPTIONS} value={role} onChange={(v) => setRole(v as AgentRole | "all")} />
        <FilterPanel label="Status" options={STATUS_OPTIONS} value={status} onChange={(v) => setStatus(v as AgentStatus | "all")} />
      </div>

      <div className="mt-6">
        <AgentGrid agents={agents} onSelect={setSelected} />
      </div>

      <AgentProfileDrawer agent={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
