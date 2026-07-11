import { eventsData } from "@/data/events.data";
import { EventCategory, SimulationEvent } from "@/types/event.types";

const SIMULATED_DELAY = 400;

function delay<T>(value: T, ms = SIMULATED_DELAY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export const eventService = {
  getAll(): Promise<SimulationEvent[]> {
    return delay(eventsData);
  },

  getByCategory(category: EventCategory | "all"): Promise<SimulationEvent[]> {
    const results = category === "all" ? eventsData : eventsData.filter((e) => e.category === category);
    return delay(results);
  },

  getRecent(count = 10): Promise<SimulationEvent[]> {
    return delay(eventsData.slice(0, count));
  },

  generate(category: EventCategory): Promise<{ category: EventCategory; triggered: boolean }> {
    return delay({ category, triggered: true }, 600);
  },
};