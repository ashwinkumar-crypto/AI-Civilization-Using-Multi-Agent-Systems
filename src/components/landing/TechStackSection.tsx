import { motion } from "framer-motion";

const STACK = [
  "React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion",
  "React Router", "TanStack Query", "Recharts", "React Flow", "Lucide Icons",
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-accent-light">
          Built With
        </span>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Modern Technology Stack</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/50">
          A production-grade frontend stack chosen for performance, type safety, and rich interactivity.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {STACK.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card px-5 py-3 text-sm font-medium text-white/80 hover:border-primary/40 hover:text-white"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}