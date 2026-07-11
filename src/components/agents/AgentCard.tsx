import { motion } from "framer-motion";
import { MapPin, Zap, Heart, ShieldCheck } from "lucide-react";
import { Agent } from "@/types/agent.types";
import StatusBadge from "@/components/common/StatusBadge";
import RoleBadge from "@/components/common/RoleBadge";

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
}

export default function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -3 }}
      className="glass-card w-full p-5 text-left transition-colors hover:border-primary/40"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-white">
            {agent.id.slice(-2)}
          </div>
          <div>
            <p className="font-semibold text-white">{agent.name}</p>
            <p className="text-xs text-white/40">{agent.id}</p>
          </div>
        </div>
        <StatusBadge status={agent.status} />
      </div>

      <div className="mt-4">
        <RoleBadge role={agent.role} />
      </div>

      <p className="mt-3 truncate text-sm text-white/60">{agent.currentTask}</p>

      <div className="mt-4 flex items-center gap-1 text-xs text-white/40">
        <MapPin size={12} />
        {agent.location.zone}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg bg-white/5 p-2">
          <Zap size={12} className="mx-auto text-warning" />
          <p className="mt-1 text-xs font-medium text-white">{agent.energy}%</p>
        </div>
        <div className="rounded-lg bg-white/5 p-2">
          <ShieldCheck size={12} className="mx-auto text-accent-light" />
          <p className="mt-1 text-xs font-medium text-white">{agent.trustScore}</p>
        </div>
        <div className="rounded-lg bg-white/5 p-2">
          <Heart size={12} className="mx-auto text-danger" />
          <p className="mt-1 text-xs font-medium text-white">{agent.health}%</p>
        </div>
      </div>
    </motion.button>
  );
}