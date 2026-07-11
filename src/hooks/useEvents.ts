import { useMemo, useState } from "react";
import { eventsData } from "@/data/events.data";
import { EventCategory } from "@/types/event.types";

export function useEvents(categoryFilter: EventCategory | "all" = "all") {
  const [events] = useState(eventsData);

  const filtered = useMemo(() => {
    if (categoryFilter === "all") return events;
    return events.filter((e) => e.category === categoryFilter);
  }, [events, categoryFilter]);

  return { events: filtered, allEvents: events };
}
