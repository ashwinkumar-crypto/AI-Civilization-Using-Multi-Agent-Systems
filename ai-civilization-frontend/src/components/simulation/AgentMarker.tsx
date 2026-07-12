import { motion } from "framer-motion";
import { Agent } from "@/types/agent.types";
import { cn } from "@/utils/cn";

const STATUS_COLOR: Record<string, string> = {
  active: "bg-success shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]",
  communicating: "bg-primary shadow-[0_0_8px_2px_rgba(59,130,246,0.6)]",
  idle: "bg-warning shadow-[0_0_8px_2px_rgba(245,158,11,0.5)]",
  resting: "bg-secondary shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]",
  offline: "bg-white/20",
};

interface AgentMarkerProps {
  agent: Agent;
  onClick: () => void;
}

export default function AgentMarker({ agent, onClick }: AgentMarkerProps) {
  return (
    <motion.button
      onClick={onClick}
      title={`${agent.name} · ${agent.currentTask}`}
      className={cn("absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform hover:scale-150", STATUS_COLOR[agent.status])}
      style={{ left: `${agent.location.x}%`, top: `${agent.location.y}%` }}
      animate={agent.status === "active" ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
}