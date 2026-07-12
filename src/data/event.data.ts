import { EventCategory, EventSeverity, SimulationEvent } from "@/types/event.types";
import { randomInt, randomItem, randomPastTimestamp, seededId } from "@/utils/randomGenerators";

const CATEGORIES: EventCategory[] = [
  "Natural Disaster", "Resource Shortage", "New Mission", "Agent Failure", "Weather Change", "Conflict Event",
];
const SEVERITIES: EventSeverity[] = ["low", "medium", "high", "critical"];
const ZONES = ["North Ridge", "Central Hub", "East Wetlands", "South Quarry", "West Forest", "Coastal Bay"];

const TITLES_BY_CATEGORY: Record<EventCategory, string[]> = {
  "Natural Disaster": ["Flash flood in the wetlands", "Earthquake tremor detected", "Wildfire spreading near forest zone"],
  "Resource Shortage": ["Energy reserves critically low", "Food production drops sharply", "Materials stockpile depleted"],
  "New Mission": ["Exploration mission assigned", "Diplomatic mission launched", "Resource expedition initiated"],
  "Agent Failure": ["Agent unresponsive during task", "Critical health failure reported", "Agent lost in unknown territory"],
  "Weather Change": ["Severe storm approaching", "Temperature drop across zones", "Heatwave impacting productivity"],
  "Conflict Event": ["Territory dispute escalates", "Trade agreement broken", "Alliance conflict reported"],
};

function generateEvent(index: number): SimulationEvent {
  const category = randomItem(CATEGORIES);
  return {
    id: seededId("EVT", index + 1),
    category,
    title: randomItem(TITLES_BY_CATEGORY[category]),
    description: `Simulation detected a ${category.toLowerCase()} event requiring agent adaptation and response coordination.`,
    severity: randomItem(SEVERITIES),
    timestamp: randomPastTimestamp(168),
    affectedZone: randomItem(ZONES),
    affectedAgents: randomInt(1, 15),
  };
}

export const eventsData: SimulationEvent[] = Array.from({ length: 100 })
  .map((_, i) => generateEvent(i))
  .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());