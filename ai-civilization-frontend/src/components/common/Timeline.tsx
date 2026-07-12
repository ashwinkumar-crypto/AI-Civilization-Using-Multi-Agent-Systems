import { ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface TimelineEntry {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  icon?: ReactNode;
  accentClassName?: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[9px] top-2 bottom-2 w-px bg-border/60" />
      <div className="space-y-6">
        {entries.map((entry) => (
          <div key={entry.id} className="relative">
            <span
              className={cn(
                "absolute -left-6 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary",
                entry.accentClassName
              )}
            />
            <div className="flex items-start gap-3">
              {entry.icon && <div className="mt-0.5 shrink-0 text-white/50">{entry.icon}</div>}
              <div>
                <p className="text-sm font-medium text-white">{entry.title}</p>
                {entry.description && <p className="mt-1 text-xs text-white/50">{entry.description}</p>}
                <p className="mt-1 text-xs text-white/30">{entry.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
