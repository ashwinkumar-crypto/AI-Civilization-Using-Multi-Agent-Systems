import {
  communicationLogsData,
  broadcastEventsData,
  networkNodes,
  networkEdges,
} from "@/data/communications.data";

const SIMULATED_DELAY = 400;

function delay<T>(value: T, ms = SIMULATED_DELAY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export const communicationService = {
  getLogs() {
    return delay(communicationLogsData);
  },

  getBroadcasts() {
    return delay(broadcastEventsData);
  },

  getNetworkGraph() {
    return delay({ nodes: networkNodes, edges: networkEdges });
  },

  getLogsForAgent(agentId: string) {
    const results = communicationLogsData.filter(
      (log) => log.fromAgentId === agentId || log.toAgentId === agentId
    );
    return delay(results);
  },
};
