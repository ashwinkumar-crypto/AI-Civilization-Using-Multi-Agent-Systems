import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/routePaths";

export default function ContactSection() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="relative px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-12 text-center"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
        <Mail size={32} className="mx-auto text-primary-light" />
        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to explore the simulation?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/50">
          Log in as a researcher or administrator and start observing an
          AI civilization evolve in real time.
        </p>
        <button
          onClick={() => navigate(ROUTES.LOGIN)}
          className="btn-primary mx-auto mt-8 flex items-center gap-2"
        >
          Get Started <ArrowRight size={18} />
        </button>
      </motion.div>
    </section>
  );
}