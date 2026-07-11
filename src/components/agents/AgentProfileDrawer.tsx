import { Agent } from "@/types/agent.types";
import Drawer from "@/components/common/Drawer";
import StatusBadge from "@/components/common/StatusBadge";
import RoleBadge from "@/components/common/RoleBadge";
import AgentMemoryPanel from "./AgentMemoryPanel";
import AgentSkillsPanel from "./AgentSkillsPanel";
import AgentDecisionLog from "./AgentDecisionLog";
import { formatTimeAgo } from "@/utils/formatters";
import { MapPin, Zap, Heart, ShieldCheck, Gauge } from "lucide-react";

interface AgentProfileDrawerProps {
  agent: Agent | null;
  onClose: () => void;
}

export default function AgentProfileDrawer({ agent, onClose }: AgentProfileDrawerProps) {
  if (!agent) return null;

  return (
    <Drawer isOpen={!!agent} onClose={onClose} title="Agent Profile">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-lg font-semibold text-white shadow-glow">
          {agent.id.slice(-2)}
        </div>
        <div>
          <p className="text-lg font-semibold text-white">{agent.name}</p>
          <p className="text-sm text-white/40">{agent.id}</p>
          <div className="mt-1.5 flex gap-2">
            <RoleBadge role={agent.role} />
            <StatusBadge status={agent.status} />
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1.5 text-sm text-white/50">
        <MapPin size={14} /> {agent.location.zone} · Created {formatTimeAgo(agent.createdAt)}
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2">
        {[
          { icon: Zap, label: "Energy", value: `${agent.energy}%`, color: "text-warning" },
          { icon: ShieldCheck, label: "Trust", value: agent.trustScore, color: "text-accent-light" },
          { icon: Heart, label: "Health", value: `${agent.health}%`, color: "text-danger" },
          { icon: Gauge, label: "Perf.", value: `${agent.performance}%`, color: "text-primary-light" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-white/5 p-3 text-center">
            <stat.icon size={14} className={`mx-auto ${stat.color}`} />
            <p className="mt-1 text-sm font-semibold text-white">{stat.value}</p>
            <p className="text-[10px] text-white/30">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white/80">Current Task</h4>
        <p className="mt-2 rounded-xl border border-border/50 bg-surfaceLight/30 p-3 text-sm text-white/60">
          {agent.currentTask}
        </p>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white/80">Skills</h4>
        <div className="mt-3">
          <AgentSkillsPanel skills={agent.skills} />
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white/80">Recent Decisions</h4>
        <div className="mt-3">
          <AgentDecisionLog decisions={agent.recentDecisions} />
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white/80">Memory</h4>
        <div className="mt-3">
          <AgentMemoryPanel memory={agent.memory} />
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-white/80">Trust Network</h4>
        <div className="mt-3 space-y-2">
          {agent.trustNetwork.slice(0, 6).map((t) => (
            <div key={t.agentId} className="flex items-center justify-between text-sm">
              <span className="text-white/60">{t.agentId}</span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full bg-gradient-to-r from-accent to-primary" style={{ width: `${t.trustScore}%` }} />
                </div>
                <span className="w-8 text-right text-xs text-white/40">{t.trustScore}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
}