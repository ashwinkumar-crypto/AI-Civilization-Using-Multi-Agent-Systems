import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/routePaths";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-light"
        >
          <Sparkles size={14} />
          National Level Hackathon · Multi-Agent Research Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Building a
          <span className="gradient-text"> Self-Organizing </span>
          AI Civilization
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/60"
        >
          A simulation platform where autonomous AI agents form societies —
          communicating, trading resources, building trust, and evolving
          strategies in a living multi-agent environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => navigate(ROUTES.LOGIN)}
            className="btn-primary flex items-center gap-2"
          >
            Launch Platform <ArrowRight size={18} />
          </button>
          <a href="#simulation-preview" className="btn-ghost flex items-center gap-2">
            <PlayCircle size={18} /> Watch Simulation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-panel relative mx-auto mt-20 aspect-video max-w-4xl rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
            <div className="grid grid-cols-6 gap-6 opacity-70">
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: (i % 6) * 0.2 }}
                  className="h-2 w-2 rounded-full bg-primary-light shadow-glow"
                />
              ))}
            </div>
          </div>
          <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white/60 backdrop-blur">
            Live Agent Grid — Preview
          </span>
        </motion.div>
      </div>
    </section>
  );
}
