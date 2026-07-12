import { Agent, AgentRole, AgentStatus } from "@/types/agent.types";
import { randomInt, randomFloat, randomItem, randomItems, randomPastTimestamp, seededId } from "@/utils/randomGenerators";

const ROLES: AgentRole[] = ["Leader", "Trader", "Builder", "Scout", "Diplomat", "Guardian", "Gatherer", "Healer"];
const STATUSES: AgentStatus[] = ["active", "idle", "communicating", "resting", "offline"];
const ZONES = ["North Ridge", "Central Hub", "East Wetlands", "South Quarry", "West Forest", "Coastal Bay"];
const TASKS = [
  "Gathering resources", "Negotiating trade", "Scouting territory", "Building shelter",
  "Healing allies", "Defending zone", "Exploring frontier", "Coordinating strategy",
  "Resting", "Analyzing threat", "Forming alliance", "Delivering supplies",
];
const SKILL_NAMES = ["Negotiation", "Combat", "Construction", "Foraging", "Leadership", "Diplomacy", "Strategy", "Healing"];
const NAME_PREFIXES = ["Aria", "Kael", "Nova", "Rhea", "Orin", "Lyra", "Zane", "Vesper", "Iris", "Cassian", "Nyla", "Theo"];

function generateAgent(index: number): Agent {
  const id = seededId("AGT", index + 1);
  const role = randomItem(ROLES);
  const status = randomItem(STATUSES);

  const memory = Array.from({ length: randomInt(3, 6) }).map((_, i) => ({
    id: `${id}-mem-${i}`,
    timestamp: randomPastTimestamp(),
    summary: randomItem([
      "Formed a trade agreement with a neighboring agent.",
      "Discovered a new resource deposit in the region.",
      "Survived a resource shortage by rationing supplies.",
      "Helped defend the zone during a conflict event.",
      "Built a new shelter to support the community.",
      "Lost trust after a failed negotiation attempt.",
    ]),
  }));

  const skills = randomItems(SKILL_NAMES, 4).map((name) => ({ name, level: randomInt(30, 98) }));

  const recentDecisions = Array.from({ length: randomInt(4, 7) }).map((_, i) => ({
    id: `${id}-dec-${i}`,
    timestamp: randomPastTimestamp(48),
    action: randomItem(["Initiated trade", "Moved to new zone", "Requested alliance", "Defended territory", "Shared resources", "Avoided conflict"]),
    reasoning: randomItem([
      "Energy reserves were below threshold.",
      "Trust score with neighbor was high enough to cooperate.",
      "Detected resource shortage in current zone.",
      "Historical outcomes favored this strategy.",
      "Leadership directive prioritized this action.",
    ]),
    outcome: randomItem(["success", "success", "neutral", "failure"] as const),
  }));

  const communicationHistory = Array.from({ length: randomInt(3, 6) }).map((_, i) => ({
    id: `${id}-comm-${i}`,
    withAgentId: seededId("AGT", randomInt(1, 50)),
    timestamp: randomPastTimestamp(24),
    type: randomItem(["message", "trade", "alliance", "conflict"] as const),
    summary: randomItem([
      "Exchanged status update on zone conditions.",
      "Negotiated a resource trade agreement.",
      "Proposed a mutual defense alliance.",
      "Disputed territory boundary claims.",
    ]),
  }));

  const trustNetwork = Array.from({ length: randomInt(3, 8) }).map(() => ({
    agentId: seededId("AGT", randomInt(1, 50)),
    trustScore: randomInt(20, 99),
  }));

  return {
    id,
    name: `${randomItem(NAME_PREFIXES)}-${index + 1}`,
    role,
    status,
    energy: randomInt(15, 100),
    trustScore: randomInt(30, 99),
    health: randomInt(40, 100),
    currentTask: randomItem(TASKS),
    location: { x: randomInt(0, 100), y: randomInt(0, 100), zone: randomItem(ZONES) },
    performance: randomFloat(55, 99),
    memory,
    skills,
    recentDecisions,
    communicationHistory,
    trustNetwork,
    createdAt: randomPastTimestamp(720),
  };
}

export const agentsData: Agent[] = Array.from({ length: 50 }).map((_, i) => generateAgent(i));