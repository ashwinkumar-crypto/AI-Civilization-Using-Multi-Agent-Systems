import { Resource, ResourceHistoryPoint, ResourceType } from "@/types/resource.types";
import { randomInt, randomItem, seededId } from "@/utils/randomGenerators";

const TYPES: ResourceType[] = ["Energy", "Food", "Tools", "Materials", "Information"];
const ZONES = ["North Ridge", "Central Hub", "East Wetlands", "South Quarry", "West Forest", "Coastal Bay"];

function generateResource(index: number): Resource {
  const capacity = randomInt(500, 2000);
  return {
    id: seededId("RES", index + 1),
    type: randomItem(TYPES),
    zone: randomItem(ZONES),
    quantity: randomInt(100, capacity),
    capacity,
    productionRate: randomInt(5, 40),
    consumptionRate: randomInt(5, 35),
    lastUpdated: new Date().toISOString(),
  };
}

export const resourcesData: Resource[] = Array.from({ length: 20 }).map((_, i) => generateResource(i));

export const resourceHistoryData: ResourceHistoryPoint[] = Array.from({ length: 12 }).map((_, i) => ({
  tick: `T-${12 - i}`,
  produced: randomInt(200, 600),
  consumed: randomInt(180, 580),
}));

export const resourceDistribution = TYPES.map((type) => ({
  name: type,
  value: resourcesData.filter((r) => r.type === type).reduce((sum, r) => sum + r.quantity, 0),
}));