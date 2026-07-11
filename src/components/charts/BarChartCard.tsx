import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface BarChartCardProps {
  title: string;
  data: Record<string, any>[];
  dataKey: string;
  xKey: string;
  color?: string;
}

export default function BarChartCard({ title, data, dataKey, xKey, color = "#3b82f6" }: BarChartCardProps) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2536" />
            <XAxis dataKey={xKey} stroke="#ffffff40" fontSize={11} />
            <YAxis stroke="#ffffff40" fontSize={11} />
            <Tooltip contentStyle={{ background: "#0b0f1a", border: "1px solid #1e2536", borderRadius: 12 }} />
            <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}