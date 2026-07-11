import { motion } from "framer-motion";
import { Users, Activity, Boxes, AlertTriangle, ShieldCheck, ServerCog } from "lucide-react";
import { useSimulation } from "@/hooks/useSimulation";
import LineChartCard from "@/components/charts/LineChartCard";
import BarChartCard from "@/components/charts/BarChartCard";
import { performanceHistoryData } from "@/data/performance.data";
import { systemLogsData } from "@/data/logs.data";
import { eventsData } from "@/data/events.data";
import { formatTimeAgo } from "@/utils/formatters";

export default function AdminDashboardPage() {
  const { state } = useSimulation();
  const criticalEvents = eventsData.filter((e) => e.severity === "critical").length;

  const widgets = [
    { icon: Users, label: "Total Agents", value: state.totalAgents, color: "text-primary-light" },
    { icon: Activity, label: "Active Agents", value: state.activeAgents, color: "text-success" },
    { icon: Boxes, label: "Total Resources", value: state.totalResources.toLocaleString(), color: "text-accent-light" },
    { icon: AlertTriangle, label: "Critical Events", value: criticalEvents, color: "text-danger" },
    { icon: ShieldCheck, label: "Avg Trust", value: state.avgTrustScore, color: "text-accent-light" },
    { icon: ServerCog, label: "System Status", value: "Operational", color: "text-success" },
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-white/40">System-wide control center for the AI Civilization platform.</p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs text-success">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
          Simulation {state.status} · Tick {state.tick}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {widgets.map((w, i) => (
          <motion.div
            key={w.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="glass-card p-5"
          >
            <w.icon size={18} className={w.color} />
            <p className="mt-3 text-xl font-bold text-white">{w.value}</p>
            <p className="mt-1 text-xs text-white/40">{w.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LineChartCard
          title="Simulation Performance"
          data={performanceHistoryData}
          xKey="label"
          lines={[
            { dataKey: "performance", color: "#3b82f6", name: "Performance" },
            { dataKey: "communicationEfficiency", color: "#06b6d4", name: "Comm. Efficiency" },
          ]}
        />
        <BarChartCard
          title="Recent Event Severity"
          data={[
            { name: "Low", count: eventsData.filter((e) => e.severity === "low").length },
            { name: "Medium", count: eventsData.filter((e) => e.severity === "medium").length },
            { name: "High", count: eventsData.filter((e) => e.severity === "high").length },
            { name: "Critical", count: eventsData.filter((e) => e.severity === "critical").length },
          ]}
          xKey="name"
          dataKey="count"
          color="#ef4444"
        />
      </div>

      <div className="mt-6 glass-card p-6">
        <h3 className="text-sm font-semibold text-white/80">System Log Feed</h3>
        <div className="mt-4 max-h-72 space-y-2 overflow-y-auto pr-1">
          {systemLogsData.slice(0, 10).map((log) => (
            <div key={log.id} className="flex items-center justify-between rounded-xl border border-border/40 bg-surfaceLight/30 px-4 py-2.5">
              <div>
                <span className="mr-2 font-mono text-xs uppercase text-white/30">[{log.level}]</span>
                <span className="text-sm text-white/70">{log.message}</span>
              </div>
              <span className="text-xs text-white/30">{formatTimeAgo(log.timestamp)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}