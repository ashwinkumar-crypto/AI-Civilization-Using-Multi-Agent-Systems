import { PerformanceDataPoint } from "@/types/simulation.types";
import { randomFloat } from "@/utils/randomGenerators";

export const performanceHistoryData: PerformanceDataPoint[] = Array.from({ length: 14 }).map((_, i) => ({
  tick: i,
  label: `Day ${i + 1}`,
  performance: randomFloat(55, 95),
  trust: randomFloat(40, 90),
  communicationEfficiency: randomFloat(50, 98),
  leadership: randomFloat(30, 85),
}));

export const radarMetricsData = [
  { metric: "Cooperation", value: randomFloat(60, 95) },
  { metric: "Efficiency", value: randomFloat(55, 90) },
  { metric: "Trust", value: randomFloat(50, 88) },
  { metric: "Adaptability", value: randomFloat(60, 92) },
  { metric: "Leadership", value: randomFloat(45, 85) },
  { metric: "Resilience", value: randomFloat(55, 90) },
];