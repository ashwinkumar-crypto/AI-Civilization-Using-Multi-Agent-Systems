import LineChartCard from "@/components/charts/LineChartCard";
import BarChartCard from "@/components/charts/BarChartCard";
import RadarChartCard from "@/components/charts/RadarChartCard";
import AreaChartCard from "@/components/charts/AreaChartCard";
import HeatMapPlaceholder from "@/components/charts/HeatMapPlaceholder";
import { performanceHistoryData, radarMetricsData } from "@/data/performance.data";
import { agentsData } from "@/data/agents.data";

const roleDistribution = Array.from(
  agentsData.reduce((map, a) => map.set(a.role, (map.get(a.role) || 0) + 1), new Map<string, number>())
).map(([name, value]) => ({ name, value }));

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Analytics</h1>
      <p className="mt-1 text-sm text-white/40">Deep performance, trust, and leadership evolution metrics.</p>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LineChartCard
          title="Leadership Evolution"
          data={performanceHistoryData}
          xKey="label"
          lines={[{ dataKey: "leadership", color: "#f59e0b", name: "Leadership" }]}
        />
        <LineChartCard
          title="Trust Evolution"
          data={performanceHistoryData}
          xKey="label"
          lines={[{ dataKey: "trust", color: "#8b5cf6", name: "Trust" }]}
        />
        <AreaChartCard
          title="Communication Efficiency"
          data={performanceHistoryData}
          xKey="label"
          areas={[{ dataKey: "communicationEfficiency", color: "#06b6d4", name: "Efficiency" }]}
        />
        <BarChartCard title="Agents per Role" data={roleDistribution} xKey="name" dataKey="value" color="#3b82f6" />
        <RadarChartCard title="Overall Civilization Health" data={radarMetricsData} />
        <HeatMapPlaceholder title="Zone Activity Heat Map" />
      </div>
    </div>
  );
}