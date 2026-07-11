import { Cpu, Database, Server, Wifi, HardDrive, Activity } from "lucide-react";
import { motion } from "framer-motion";

const METRICS = [
  { icon: Cpu, label: "CPU Usage", value: 42, unit: "%" },
  { icon: HardDrive, label: "Memory Usage", value: 61, unit: "%" },
  { icon: Database, label: "DB Latency", value: 18, unit: "ms" },
  { icon: Wifi, label: "Network Throughput", value: 74, unit: "%" },
  { icon: Server, label: "Active Nodes", value: 8, unit: "" },
  { icon: Activity, label: "Uptime", value: 99.9, unit: "%" },
];

const SERVICES = [
  { name: "Simulation Engine", status: "operational" },
  { name: "Agent Orchestrator", status: "operational" },
  { name: "Resource Manager", status: "operational" },
  { name: "Event Scheduler", status: "operational" },
  { name: "Auth Service", status: "operational" },
  { name: "Network Layer", status: "degraded" },
];

export default function SystemHealthPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">System Health</h1>
      <p className="mt-1 text-sm text-white/40">Live infrastructure and service status.</p>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-5"
          >
            <m.icon size={18} className="text-accent-light" />
            <p className="mt-3 text-2xl font-bold text-white">
              {m.value}
              <span className="text-sm font-normal text-white/40">{m.unit}</span>
            </p>
            <p className="mt-1 text-xs text-white/40">{m.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 glass-card p-6">
        <h3 className="text-sm font-semibold text-white/80">Service Status</h3>
        <div className="mt-4 space-y-2">
          {SERVICES.map((s) => (
            <div key={s.name} className="flex items-center justify-between rounded-xl border border-border/40 bg-surfaceLight/30 px-4 py-3">
              <span className="text-sm text-white/70">{s.name}</span>
              <span className={`flex items-center gap-1.5 text-xs capitalize ${s.status === "operational" ? "text-success" : "text-warning"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${s.status === "operational" ? "bg-success" : "bg-warning"}`} />
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
