import { randomInt } from "@/utils/randomGenerators";

export default function HeatMapPlaceholder({ title }: { title: string }) {
  const cells = Array.from({ length: 70 }).map(() => randomInt(0, 100));

  const colorFor = (v: number) => {
    if (v > 75) return "bg-primary";
    if (v > 50) return "bg-primary/60";
    if (v > 25) return "bg-primary/30";
    return "bg-white/5";
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <div className="mt-4 grid grid-cols-10 gap-1.5">
        {cells.map((v, i) => (
          <div key={i} className={`aspect-square rounded-sm ${colorFor(v)}`} title={`${v}%`} />
        ))}
      </div>
      <p className="mt-3 text-xs text-white/30">Zone activity intensity over the last 7 days</p>
    </div>
  );
}
