import { motion } from "framer-motion";
import { Users, Activity, Moon, Boxes, MessageSquare, ShieldCheck, Gauge, Clock } from "lucide-react";
import { useSimulation } from "@/hooks/useSimulation";
import LineChartCard from "@/components/charts/LineChartCard";
import RadarChartCard from "@/components/charts/RadarChartCard";
import { performanceHistoryData, radarMetricsData } from "@/data/performance.data";
import { eventsData } from "@/data/events.data";
import { formatTimeAgo } from "@/utils/formatters";

export default function OverviewPage() {
  const { state } = useSimulation();

  const widgets = [
    { icon: Users, label: "Total Agents", value: state.totalAgents, color: "text-primary-light" },
    { icon: Activity, label: "Active Agents", value: state.activeAgents, color: "text-success" },
    { icon: Moon, label: "Idle Agents", value: state.idleAgents, color: "text-warning" },
    { icon: Boxes, label: "Resources", value: state.totalResources.toLocaleString(), color: "text-accent-light" },
    { icon: MessageSquare, label: "Communications", value: state.communicationCount, color: "text-secondary-light" },
    { icon: ShieldCheck, label: "Avg Trust Score", value: state.avgTrustScore, color: "text-accent-light" },
    { icon: Gauge, label: "Performance", value: `${state.avgPerformance}%`, color: "text-primary-light" },
    { icon: Clock, label: "Sim. Time", value: state.elapsedTime, color: "text-white/70" },
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
          <p className="mt-1 text-sm text-white/40">Real-time state of the AI civilization simulation.</p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs text-success">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
          Simulation {state.status} · Tick {state.tick}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {widgets.map((w, i) => (
          <motion.div
            key={w.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="glass-card p-5"
          >
            <w.icon size={18} className={w.color} />
            <p className="mt-3 text-2xl font-bold text-white">{w.value}</p>
            <p className="mt-1 text-xs text-white/40">{w.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LineChartCard
            title="Performance & Trust Over Time"
            data={performanceHistoryData}
            xKey="label"
            lines={[
              { dataKey: "performance", color: "#3b82f6", name: "Performance" },
              { dataKey: "trust", color: "#8b5cf6", name: "Trust" },
            ]}
          />
        </div>
        <RadarChartCard title="Civilization Metrics" data={radarMetricsData} />
      </div>

      <div className="mt-6 glass-card p-6">
        <h3 className="text-sm font-semibold text-white/80">Recent Events</h3>
        <div className="mt-4 space-y-3">
          {eventsData.slice(0, 5).map((event) => (
            <div key={event.id} className="flex items-center justify-between rounded-xl border border-border/40 bg-surfaceLight/30 px-4 py-3">
              <div>
                <p className="text-sm text-white/80">{event.title}</p>
                <p className="text-xs text-white/30">{event.category} · {event.affectedZone}</p>
              </div>
              <span className="text-xs text-white/30">{formatTimeAgo(event.timestamp)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}