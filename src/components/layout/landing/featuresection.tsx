import { motion } from "framer-motion";
import { Brain, Network, ShieldCheck, Gauge, Boxes, Radio } from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "Autonomous Decision Making",
    desc: "Agents evaluate context, memory, and goals to independently choose actions each simulation tick.",
  },
  {
    icon: Network,
    title: "Emergent Communication",
    desc: "Agents exchange messages and broadcast events, forming organic communication networks over time.",
  },
  {
    icon: ShieldCheck,
    title: "Dynamic Trust Modeling",
    desc: "Trust scores evolve from repeated interactions, shaping alliances, cooperation, and conflict.",
  },
  {
    icon: Boxes,
    title: "Resource Economy",
    desc: "A living economy of energy, food, tools, and materials that agents produce, consume, and trade.",
  },
  {
    icon: Radio,
    title: "Environmental Events",
    desc: "Disasters, shortages, and weather shifts force agents to adapt strategies in real time.",
  },
  {
    icon: Gauge,
    title: "Live Performance Analytics",
    desc: "Track leadership evolution, efficiency, and civilization-wide metrics with rich visual dashboards.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary-light">
            Platform Capabilities
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything a civilization needs
          </h2>
          <p className="mt-4 text-white/50">
            Purpose-built systems that let intelligent agents organize, adapt, and grow.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card group p-7 transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary-light transition-transform group-hover:scale-110">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}