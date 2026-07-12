import { motion } from "framer-motion";
import { GraduationCap, Building2, FlaskConical, Gamepad2 } from "lucide-react";

const APPLICATIONS = [
  { icon: FlaskConical, title: "AI Research", desc: "Study emergent behavior, cooperation, and multi-agent reasoning." },
  { icon: GraduationCap, title: "Education", desc: "Teach distributed systems and agent-based modeling concepts." },
  { icon: Building2, title: "Policy Simulation", desc: "Model economic and social dynamics under changing conditions." },
  { icon: Gamepad2, title: "Simulation Design", desc: "Prototype game economies and NPC behavior systems." },
];

export default function ApplicationsSection() {
  return (
    <section className="relative border-y border-border/40 bg-surface/30 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent-light">
            Use Cases
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Where it applies</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPLICATIONS.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <app.icon size={26} className="text-primary-light" />
              <h3 className="mt-4 font-semibold text-white">{app.title}</h3>
              <p className="mt-2 text-sm text-white/50">{app.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}