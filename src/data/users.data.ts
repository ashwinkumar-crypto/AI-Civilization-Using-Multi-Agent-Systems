import { seededId, randomItem, randomPastTimestamp } from "@/utils/randomGenerators";

export type SystemUserRole = "researcher" | "admin";
export type SystemUserStatus = "active" | "suspended" | "invited";

export interface SystemUser {
  id: string;
  name: string;
  email: string;
  role: SystemUserRole;
  status: SystemUserStatus;
  lastActive: string;
  joinedAt: string;
}

const NAMES = [
  "Dr. Ariana Voss", "Marcus Chen", "Priya Nathan", "Leo Fontaine", "Sana Ibrahim",
  "Oliver Petrov", "Maya Lindqvist", "Devon Okafor", "Elena Castillo", "Ravi Sundaram",
];

export const usersData: SystemUser[] = NAMES.map((name, i) => ({
  id: seededId("USR", i + 1),
  name,
  email: `${name.split(" ").pop()?.toLowerCase()}@aicivilization.ai`,
  role: i < 2 ? (i === 0 ? "researcher" : "admin") : randomItem(["researcher", "admin"] as SystemUserRole[]),
  status: randomItem(["active", "active", "active", "suspended", "invited"] as SystemUserStatus[]),
  lastActive: randomPastTimestamp(72),
  joinedAt: randomPastTimestamp(2000),
}));