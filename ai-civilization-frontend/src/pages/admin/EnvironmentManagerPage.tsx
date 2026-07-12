import { useState } from "react";
import { CloudSun, CloudRain, Snowflake, Sun, Wind } from "lucide-react";
import { cn } from "@/utils/cn";

const ZONES = ["North Ridge", "Central Hub", "East Wetlands", "South Quarry", "West Forest", "Coastal Bay"];

const WEATHER_OPTIONS = [
  { key: "clear", label: "Clear", icon: Sun },
  { key: "cloudy", label: "Cloudy", icon: CloudSun },
  { key: "rain", label: "Rain", icon: CloudRain },
  { key: "storm", label: "Storm", icon: Wind },
  { key: "snow", label: "Snow", icon: Snowflake },
];

export default function EnvironmentManagerPage() {
  const [zoneWeather, setZoneWeather] = useState<Record<string, string>>(
    Object.fromEntries(ZONES.map((z) => [z, "clear"]))
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Environment Manager</h1>
      <p className="mt-1 text-sm text-white/40">Control weather and environmental conditions per zone.</p>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {ZONES.map((zone) => (
          <div key={zone} className="glass-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">{zone}</h3>
              <span className="text-xs capitalize text-white/40">{zoneWeather[zone]}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {WEATHER_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setZoneWeather((s) => ({ ...s, [zone]: opt.key }))}
                  className={cn(
                    "flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs transition-colors",
                    zoneWeather[zone] === opt.key
                      ? "border-primary/40 bg-primary/10 text-primary-light"
                      : "border-border/50 text-white/50 hover:text-white"
                  )}
                >
                  <opt.icon size={14} /> {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
