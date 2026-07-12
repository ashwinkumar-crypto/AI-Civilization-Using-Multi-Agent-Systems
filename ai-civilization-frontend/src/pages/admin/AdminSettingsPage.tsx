import { useState } from "react";

const TOGGLES = [
  { key: "maintenanceMode", label: "Maintenance Mode", desc: "Temporarily restrict researcher access during updates." },
  { key: "autoSpawn", label: "Auto-Spawn Agents", desc: "Automatically replace agents that go offline." },
  { key: "eventGeneration", label: "Automatic Event Generation", desc: "Let the system generate random events periodically." },
  { key: "logRetention", label: "Extended Log Retention", desc: "Keep system logs for 90 days instead of 30." },
];

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Record<string, boolean>>({
    maintenanceMode: false,
    autoSpawn: true,
    eventGeneration: true,
    logRetention: false,
  });

  const toggle = (key: string) => setSettings((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Admin Settings</h1>
      <p className="mt-1 text-sm text-white/40">Platform-wide configuration for administrators.</p>

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