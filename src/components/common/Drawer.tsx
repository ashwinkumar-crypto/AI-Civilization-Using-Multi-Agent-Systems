import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Drawer({ isOpen, onClose, title, children }: DrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="glass-panel fixed right-0 top-0 z-50 h-screen w-full max-w-md overflow-y-auto border-l border-border/60 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <button onClick={onClose} className="text-white/40 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="mt-6">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}