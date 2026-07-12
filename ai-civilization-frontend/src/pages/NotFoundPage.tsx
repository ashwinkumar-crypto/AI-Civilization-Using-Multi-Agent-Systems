import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, Home, ArrowLeft } from "lucide-react";
import { ROUTES } from "@/routes/routePaths";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-glow"
        >
          <Sparkles size={32} className="text-white" />
        </motion.div>

        <h1 className="gradient-text mt-8 text-7xl font-bold tracking-tight sm:text-8xl">404</h1>
        <p className="mt-4 text-xl font-semibold text-white">This zone hasn't been simulated yet</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/50">
          The page you're looking for doesn't exist in this civilization's map. It may have
          drifted beyond the known territory.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={() => navigate(-1)} className="btn-ghost flex items-center gap-2">
            <ArrowLeft size={16} /> Go Back
          </button>
          <button onClick={() => navigate(ROUTES.HOME)} className="btn-primary flex items-center gap-2">
            <Home size={16} /> Return Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}