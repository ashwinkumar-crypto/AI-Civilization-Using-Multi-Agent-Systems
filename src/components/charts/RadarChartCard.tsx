import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";

interface RadarChartCardProps {
  title: string;
  data: { metric: string; value: number }[];
}

export default function RadarChartCard({ title, data }: RadarChartCardProps) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#1e2536" />
            <PolarAngleAxis dataKey="metric" stroke="#ffffff60" fontSize={11} />
            <PolarRadiusAxis stroke="#ffffff20" fontSize={10} />
            <Radar dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.35} />
            <Tooltip contentStyle={{ background: "#0b0f1a", border: "1px solid #1e2536", borderRadius: 12 }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}