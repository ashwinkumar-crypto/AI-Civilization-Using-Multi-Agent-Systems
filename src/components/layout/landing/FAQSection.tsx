import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "What is AI Civilization?", a: "A multi-agent simulation platform where autonomous AI agents interact, communicate, and self-organize within a shared virtual environment." },
  { q: "Is this connected to a live backend?", a: "This frontend uses realistic dummy data to demonstrate the full research and admin experience end-to-end." },
  { q: "Who can access the dashboards?", a: "Two roles are supported: Researchers, who monitor and analyze the simulation, and Administrators, who control it." },
  { q: "What technologies power the frontend?", a: "React 19, TypeScript, Tailwind CSS, Framer Motion, Recharts, and React Flow, among others." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-secondary-light">
            FAQ
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Common Questions</h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-white">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-white/40 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-white/50">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}