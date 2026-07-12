import { motion } from "framer-motion";
import { agentsData } from "@/data/agents.data";
import StatusBadge from "@/components/common/StatusBadge";
import RoleBadge from "@/components/common/RoleBadge";

export default function AgentPreviewSection() {
  const preview = agentsData.slice(0, 6);

  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-light">
            Meet the Agents
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            50 Autonomous AI Personas
          </h2>
          <p className="mt-4 text-white/50">
            Each with unique roles, skills, memory, and evolving trust relationships.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-white">
                  {agent.id.slice(-2)}
                </div>
                <StatusBadge status={agent.status} />
              </div>
              <h3 className="mt-4 font-semibold text-white">{agent.id}</h3>
              <div className="mt-2">
                <RoleBadge role={agent.role} />
              </div>
              <div className="mt-4 space-y-2 text-xs text-white/50">
                <div className="flex justify-between">
                  <span>Energy</span>
                  <span className="text-white/80">{agent.energy}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Trust Score</span>
                  <span className="text-white/80">{agent.trustScore}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}