import { motion } from "framer-motion";
import { Eye, Brain, Zap, RefreshCw } from "lucide-react";

const STEPS = [
  { icon: Eye, title: "Perceive", desc: "Agents sense their environment, nearby agents, and available resources." },
  { icon: Brain, title: "Reason", desc: "Goals, memory, and skills are weighed to select the optimal next action." },
  { icon: Zap, title: "Act", desc: "Agents move, communicate, trade, or complete tasks within the simulation." },
  { icon: RefreshCw, title: "Adapt", desc: "Outcomes update trust, memory, and strategy for the next simulation tick." },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary-light">
            Agent Lifecycle
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">How agents think</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="glass-card p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-glow">
                  <step.icon size={22} className="text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/50">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-primary/50 to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}