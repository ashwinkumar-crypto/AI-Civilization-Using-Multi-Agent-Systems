import { useState } from "react";

const TOGGLES = [
  { key: "realtimeAlerts", label: "Real-time Alerts", desc: "Receive live notifications during simulation events." },
  { key: "autoRefresh", label: "Auto Refresh Dashboards", desc: "Automatically refresh widgets every 30 seconds." },
  { key: "darkMode", label: "Dark Theme", desc: "Use the dark research console theme (recommended)." },
  { key: "soundAlerts", label: "Sound Alerts", desc: "Play a sound for critical severity events." },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, boolean>>({
    realtimeAlerts: true,
    autoRefresh: true,
    darkMode: true,
    soundAlerts: false,
  });

  const toggle = (key: string) => setSettings((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Settings</h1>
      <p className="mt-1 text-sm text-white/40">Manage your dashboard preferences.</p>

      <div className="mt-6 max-w-xl space-y-3">
        {TOGGLES.map((t) => (
          <div key={t.key} className="glass-card flex items-center justify-between p-5">
            <div>
              <p className="text-sm font-medium text-white">{t.label}</p>
              <p className="mt-1 text-xs text-white/40">{t.desc}</p>
            </div>
            <button
              onClick={() => toggle(t.key)}
              className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${settings[t.key] ? "bg-primary" : "bg-white/10"}`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${settings[t.key] ? "translate-x-5" : "translate-x-0.5"}`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
