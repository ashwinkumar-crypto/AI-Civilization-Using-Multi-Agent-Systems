export interface CommunicationLog {
  id: string;
  fromAgentId: string;
  toAgentId: string;
  type: "message" | "trade" | "alliance" | "conflict" | "broadcast";
  content: string;
  timestamp: string;
}

export interface BroadcastEvent {
  id: string;
  senderAgentId: string;
  message: string;
  reach: number;
  timestamp: string;
}

export interface NetworkNodeData {
  id: string;
  label: string;
  role: string;
  trustScore: number;
}

export interface NetworkEdgeData {
  id: string;
  source: string;
  target: string;
  weight: number;
}