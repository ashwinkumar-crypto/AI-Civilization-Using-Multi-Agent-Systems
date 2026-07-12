import { motion } from "framer-motion";
import { Activity, Users, Zap } from "lucide-react";

export default function SimulationPreviewSection() {
  return (
    <section id="simulation-preview" className="relative border-y border-border/40 bg-surface/30 px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary-light">
            Live Simulation
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Watch a civilization emerge in real time
          </h2>
          <p className="mt-5 text-white/50">
            Every agent perceives its environment, reasons about its goals, and acts —
            producing patterns of cooperation, trade, and conflict that no single
            script ever wrote.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Users, label: "50 Agents" },
              { icon: Activity, label: "Real-time Ticks" },
              { icon: Zap, label: "Dynamic Events" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card flex flex-col items-center gap-2 p-4 text-center">
                <stat.icon size={20} className="text-accent-light" />
                <span className="text-xs text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel relative aspect-square rounded-3xl border border-white/10 p-6"
        >
          <div className="grid h-full w-full grid-cols-8 grid-rows-8 gap-1.5">
            {Array.from({ length: 64 }).map((_, i) => {
              const active = [5, 12, 18, 23, 30, 34, 41, 47, 52, 58].includes(i);
              return (
                <motion.div
                  key={i}
                  animate={active ? { opacity: [0.3, 1, 0.3] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: (i % 10) * 0.15 }}
                  className={`rounded-sm ${active ? "bg-primary shadow-glow" : "bg-white/5"}`}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}