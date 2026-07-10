import { seededId, randomItem, randomInt, randomPastTimestamp } from "@/utils/randomGenerators";

export type TaskStatus = "pending" | "in-progress" | "completed" | "failed";

export interface SimTask {
  id: string;
  title: string;
  assignedAgentId: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  createdAt: string;
  zone: string;
}

const TITLES = [
  "Establish trade route", "Build shelter cluster", "Scout northern border", "Negotiate resource pact",
  "Heal injured agents", "Defend central hub", "Explore uncharted zone", "Distribute surplus food",
  "Repair damaged tools", "Form regional alliance", "Investigate anomaly", "Relocate resource stockpile",
];
const ZONES = ["North Ridge", "Central Hub", "East Wetlands", "South Quarry", "West Forest", "Coastal Bay"];
const STATUSES: TaskStatus[] = ["pending", "in-progress", "completed", "failed"];

export const tasksData: SimTask[] = Array.from({ length: 20 }).map((_, i) => ({
  id: seededId("TSK", i + 1),
  title: randomItem(TITLES),
  assignedAgentId: seededId("AGT", randomInt(1, 50)),
  status: randomItem(STATUSES),
  priority: randomItem(["low", "medium", "high"] as const),
  createdAt: randomPastTimestamp(96),
  zone: randomItem(ZONES),
}));