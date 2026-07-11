import { motion } from "framer-motion";

const STATS = [
  { value: "50", label: "Active AI Agents" },
  { value: "100+", label: "Simulated Events" },
  { value: "1.2K", label: "Messages Exchanged" },
  { value: "99.9%", label: "Simulation Uptime" },
];

export default function StatsSection() {
  return (
    <section className="relative border-y border-border/40 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="gradient-text text-4xl font-bold sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm text-white/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}