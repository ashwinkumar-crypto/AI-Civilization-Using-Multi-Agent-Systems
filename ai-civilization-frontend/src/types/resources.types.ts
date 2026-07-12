export type ResourceType = "Energy" | "Food" | "Tools" | "Materials" | "Information";

export interface Resource {
  id: string;
  type: ResourceType;
  zone: string;
  quantity: number;
  capacity: number;
  productionRate: number;
  consumptionRate: number;
  lastUpdated: string;
}

export interface ResourceHistoryPoint {
  tick: string;
  produced: number;
  consumed: number;
}