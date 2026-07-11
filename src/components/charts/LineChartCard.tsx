import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface LineChartCardProps {
  title: string;
  data: Record<string, any>[];
  lines: { dataKey: string; color: string; name: string }[];
  xKey: string;
}

export default function LineChartCard({ title, data, lines, xKey }: LineChartCardProps) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2536" />
            <XAxis dataKey={xKey} stroke="#ffffff40" fontSize={11} />
            <YAxis stroke="#ffffff40" fontSize={11} />
            <Tooltip contentStyle={{ background: "#0b0f1a", border: "1px solid #1e2536", borderRadius: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            {lines.map((line) => (
              <Line key={line.dataKey} type="monotone" dataKey={line.dataKey} stroke={line.color} name={line.name} strokeWidth={2} dot={false} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}