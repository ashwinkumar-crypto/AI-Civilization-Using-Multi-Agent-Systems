import { resourcesData, resourceHistoryData, resourceDistribution } from "@/data/resources.data";
import { Resource, ResourceType } from "@/types/resource.types";

const SIMULATED_DELAY = 400;

function delay<T>(value: T, ms = SIMULATED_DELAY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export const resourceService = {
  getAll(): Promise<Resource[]> {
    return delay(resourcesData);
  },

  getByType(type: ResourceType): Promise<Resource[]> {
    return delay(resourcesData.filter((r) => r.type === type));
  },

  getHistory() {
    return delay(resourceHistoryData);
  },

  getDistribution() {
    return delay(resourceDistribution);
  },

  addResources(zone: string, type: ResourceType, amount: number): Promise<{ zone: string; type: ResourceType; amount: number }> {
    return delay({ zone, type, amount }, 600);
  },
};