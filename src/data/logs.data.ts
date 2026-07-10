import { randomItem, randomPastTimestamp, seededId } from "@/utils/randomGenerators";

export type LogLevel = "info" | "warning" | "error" | "success";

export interface SystemLog {
  id: string;
  level: LogLevel;
  source: string;
  message: string;
  timestamp: string;
}

const SOURCES = ["Simulation Engine", "Agent Orchestrator", "Resource Manager", "Event Scheduler", "Auth Service", "Network Layer"];
const MESSAGES_BY_LEVEL: Record<LogLevel, string[]> = {
  info: ["Simulation tick processed successfully.", "Agent state synced.", "Resource levels recalculated."],
  warning: ["Resource levels approaching threshold.", "Agent response time elevated.", "Trust score volatility detected."],
  error: ["Failed to process agent action.", "Communication timeout between agents.", "Resource allocation conflict."],
  success: ["New agents spawned successfully.", "Simulation checkpoint saved.", "Event resolved without incident."],
};

export const systemLogsData: SystemLog[] = Array.from({ length: 40 }).map((_, i) => {
  const level = randomItem(["info", "warning", "error", "success"] as LogLevel[]);
  return {
    id: seededId("LOG", i + 1),
    level,
    source: randomItem(SOURCES),
    message: randomItem(MESSAGES_BY_LEVEL[level]),
    timestamp: randomPastTimestamp(96),
  };
}).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());