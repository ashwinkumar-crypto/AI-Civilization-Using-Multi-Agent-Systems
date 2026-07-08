import { motion } from "framer-motion";
import { Cpu, Database, Layers, Radio } from "lucide-react";

const LAYERS = [
  { icon: Layers, title: "Presentation Layer", desc: "React-based dashboards for researchers and administrators." },
  { icon: Radio, title: "Agent Orchestration Layer", desc: "Coordinates perception, decision, and action cycles for every agent." },
  { icon: Cpu, title: "Multi-Agent Reasoning Core", desc: "Independent AI agents with memory, skills, and goal-driven behavior." },
  { icon: Database, title: "Simulation & Data Layer", desc: "Environment state, resources, events, and historical logs." },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="relative border-y border-border/40 bg-surface/30 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-light">
            System Design
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Architecture Overview</h2>
          <p className="mt-4 text-white/50">
            A layered architecture connecting intelligent agents to a persistent, observable world.
          </p>
        </div>

        <div className="mt-16 grid gap-4">
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel flex items-center gap-6 rounded-2xl p-6"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-glow">
                <layer.icon size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{layer.title}</h3>
                <p className="mt-1 text-sm text-white/50">{layer.desc}</p>
              </div>
              <span className="ml-auto hidden font-mono text-xs text-white/20 sm:block">
                LAYER {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}