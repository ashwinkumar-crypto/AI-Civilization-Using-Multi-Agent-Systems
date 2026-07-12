import { useState } from "react";
import { systemLogsData, LogLevel } from "@/data/logs.data";
import FilterPanel from "@/components/common/FilterPanel";
import { formatTimeAgo } from "@/utils/formatters";
import { cn } from "@/utils/cn";
import { Download } from "lucide-react";
import Button from "@/components/common/Button";

const LEVEL_OPTIONS = [
  { label: "All Levels", value: "all" },
  { label: "Info", value: "info" },
  { label: "Warning", value: "warning" },
  { label: "Error", value: "error" },
  { label: "Success", value: "success" },
];

const LEVEL_STYLES: Record<LogLevel, string> = {
  info: "text-primary-light",
  warning: "text-warning",
  error: "text-danger",
  success: "text-success",
};

export default function LogsPage() {
  const [level, setLevel] = useState<LogLevel | "all">("all");
  const filtered = level === "all" ? systemLogsData : systemLogsData.filter((l) => l.level === level);

  return (
    <div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">System Logs</h1>
          <p className="mt-1 text-sm text-white/40">{filtered.length} log entries</p>
        </div>
        <div className="flex items-center gap-3">
          <FilterPanel label="Level" options={LEVEL_OPTIONS} value={level} onChange={(v) => setLevel(v as LogLevel | "all")} />
          <Button variant="ghost" icon={<Download size={14} />} className="px-4 py-2.5 text-xs">
            Export Report
          </Button>
        </div>
      </div>

      <div className="mt-6 glass-card p-0">
        <div className="max-h-[600px] overflow-y-auto">
          {filtered.map((log) => (
            <div key={log.id} className="flex items-center justify-between border-b border-border/30 px-5 py-3 last:border-0 hover:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className={cn("font-mono text-xs uppercase", LEVEL_STYLES[log.level])}>[{log.level}]</span>
                <span className="text-xs text-white/30">{log.source}</span>
                <span className="text-sm text-white/70">{log.message}</span>
              </div>
              <span className="text-xs text-white/30">{formatTimeAgo(log.timestamp)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}