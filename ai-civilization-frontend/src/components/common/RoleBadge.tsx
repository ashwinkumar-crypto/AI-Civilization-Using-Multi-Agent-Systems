import { AgentRole } from "@/types/agent.types";

const ROLE_COLORS: Record<AgentRole, string> = {
  Leader: "from-primary to-secondary",
  Trader: "from-accent to-primary",
  Builder: "from-warning to-accent",
  Scout: "from-secondary to-accent",
  Diplomat: "from-success to-accent",
  Guardian: "from-danger to-secondary",
  Gatherer: "from-accent to-success",
  Healer: "from-success to-primary",
};

export default function RoleBadge({ role }: { role: AgentRole }) {
  return (
    <span
      className={`inline-block rounded-full bg-gradient-to-r ${ROLE_COLORS[role]} bg-opacity-10 px-2.5 py-1 text-xs font-medium text-white/90`}
      style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
    >
      {role}
    </span>
  );
}