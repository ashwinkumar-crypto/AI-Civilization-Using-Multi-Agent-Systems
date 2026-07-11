import { resourcesData, resourceHistoryData, resourceDistribution } from "@/data/resources.data";
import PieChartCard from "@/components/charts/PieChartCard";
import AreaChartCard from "@/components/charts/AreaChartCard";
import { Zap, Wheat, Wrench, Package, Database } from "lucide-react";

const ICONS: Record<string, any> = { Energy: Zap, Food: Wheat, Tools: Wrench, Materials: Package, Information: Database };

export default function ResourceManagementPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Resource Management</h1>
      <p className="mt-1 text-sm text-white/40">Distribution, production, and consumption across all zones.</p>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PieChartCard title="Resource Distribution" data={resourceDistribution} />
        <AreaChartCard
          title="Production vs Consumption"
          data={resourceHistoryData}
          xKey="tick"
          areas={[
            { dataKey: "produced", color: "#22c55e", name: "Produced" },
            { dataKey: "consumed", color: "#ef4444", name: "Consumed" },
          ]}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resourcesData.map((res) => {
          const Icon = ICONS[res.type];
          const pct = Math.round((res.quantity / res.capacity) * 100);
          return (
            <div key={res.id} className="glass-card p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon size={16} className="text-accent-light" />
                  <p className="text-sm font-medium text-white">{res.type}</p>
                </div>
                <span className="text-xs text-white/30">{res.zone}</span>
              </div>
              <p className="mt-3 text-xl font-bold text-white">
                {res.quantity.toLocaleString()} <span className="text-xs font-normal text-white/30">/ {res.capacity.toLocaleString()}</span>
              </p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${pct}%` }} />
              </div>
              <div className="mt-3 flex justify-between text-xs text-white/40">
                <span>Prod. +{res.productionRate}/tick</span>
                <span>Cons. -{res.consumptionRate}/tick</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}