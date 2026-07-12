const ZONES = [
  { name: "North Ridge", x: 15, y: 15 },
  { name: "Central Hub", x: 50, y: 45 },
  { name: "East Wetlands", x: 82, y: 30 },
  { name: "South Quarry", x: 30, y: 80 },
  { name: "West Forest", x: 12, y: 60 },
  { name: "Coastal Bay", x: 85, y: 78 },
];

export default function EnvironmentOverlay() {
  return (
    <>
      {ZONES.map((zone) => (
        <div
          key={zone.name}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-white/[0.02]"
          style={{ left: `${zone.x}%`, top: `${zone.y}%`, width: 140, height: 140 }}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] uppercase tracking-wider text-white/20">
            {zone.name}
          </span>
        </div>
      ))}
    </>
  );
}