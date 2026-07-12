import { BroadcastEvent, CommunicationLog, NetworkEdgeData, NetworkNodeData } from "@/types/communication.types";
import { agentsData } from "./agents.data";
import { randomInt, randomItem, randomPastTimestamp, seededId } from "@/utils/randomGenerators";

const MESSAGES = [
  "Requesting resource support in current zone.",
  "Proposing a mutual trade agreement.",
  "Reporting hostile activity nearby.",
  "Sharing updated map data.",
  "Confirming alliance terms.",
  "Warning of incoming resource shortage.",
];

export const communicationLogsData: CommunicationLog[] = Array.from({ length: 60 }).map((_, i) => ({
  id: seededId("COMM", i + 1),
  fromAgentId: seededId("AGT", randomInt(1, 50)),
  toAgentId: seededId("AGT", randomInt(1, 50)),
  type: randomItem(["message", "trade", "alliance", "conflict", "broadcast"] as const),
  content: randomItem(MESSAGES),
  timestamp: randomPastTimestamp(48),
}));

export const broadcastEventsData: BroadcastEvent[] = Array.from({ length: 15 }).map((_, i) => ({
  id: seededId("BCE", i + 1),
  senderAgentId: seededId("AGT", randomInt(1, 50)),
  message: randomItem([
    "Zone-wide resource shortage alert issued.",
    "New leadership consensus reached.",
    "Weather warning broadcast to all agents.",
    "Territory boundary update shared network-wide.",
  ]),
  reach: randomInt(5, 45),
  timestamp: randomPastTimestamp(72),
}));

export const networkNodes: NetworkNodeData[] = agentsData.slice(0, 20).map((a) => ({
  id: a.id,
  label: a.name,
  role: a.role,
  trustScore: a.trustScore,
}));

export const networkEdges: NetworkEdgeData[] = Array.from({ length: 26 }).map((_, i) => {
  const source = randomItem(networkNodes).id;
  let target = randomItem(networkNodes).id;
  while (target === source) target = randomItem(networkNodes).id;
  return { id: `edge-${i}`, source, target, weight: randomInt(20, 99) };
});
