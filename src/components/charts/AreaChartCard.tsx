import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface AreaChartCardProps {
  title: string;
  data: Record<string, any>[];
  areas: { dataKey: string; color: string; name: string }[];
  xKey: string;
}

export default function AreaChartCard({ title, data, areas, xKey }: AreaChartCardProps) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              {areas.map((a) => (
                <linearGradient key={a.dataKey} id={`grad-${a.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={a.color} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={a.color} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2536" />
            <XAxis dataKey={xKey} stroke="#ffffff40" fontSize={11} />
            <YAxis stroke="#ffffff40" fontSize={11} />
            <Tooltip contentStyle={{ background: "#0b0f1a", border: "1px solid #1e2536", borderRadius: 12 }} />
            {areas.map((a) => (
              <Area key={a.dataKey} type="monotone" dataKey={a.dataKey} name={a.name} stroke={a.color} fill={`url(#grad-${a.dataKey})`} strokeWidth={2} />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}