import { useState } from "react";
import SimulationControls from "@/components/simulation/SimulationControls";
import SimulationCanvas from "@/components/simulation/SimulationCanvas";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { UserPlus, UserMinus, Zap, CloudRain } from "lucide-react";

export default function SimulationControlPage() {
  const [modal, setModal] = useState<"spawn" | "remove" | "resource" | "weather" | null>(null);
  const [log, setLog] = useState<string[]>([]);

  const runAction = (label: string) => {
    setLog((prev) => [`${new Date().toLocaleTimeString()} — ${label}`, ...prev].slice(0, 8));
    setModal(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Simulation Control</h1>
      <p className="mt-1 text-sm text-white/40">Direct control over the running simulation environment.</p>

      <div className="mt-6">
        <SimulationControls />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Button variant="success" icon={<UserPlus size={16} />} onClick={() => setModal("spawn")}>
          Spawn Agents
        </Button>
        <Button variant="danger" icon={<UserMinus size={16} />} onClick={() => setModal("remove")}>
          Remove Agents
        </Button>
        <Button variant="ghost" icon={<Zap size={16} />} onClick={() => setModal("resource")}>
          Add Resources
        </Button>
        <Button variant="ghost" icon={<CloudRain size={16} />} onClick={() => setModal("weather")}>
          Change Weather
        </Button>
      </div>

      <div className="mt-6">
        <SimulationCanvas />
      </div>

      <div className="mt-6 glass-card p-6">
        <h3 className="text-sm font-semibold text-white/80">Action Log</h3>
        <div className="mt-3 space-y-2">
          {log.length === 0 ? (
            <p className="text-sm text-white/30">No admin actions taken yet.</p>
          ) : (
            log.map((entry, i) => (
              <p key={i} className="rounded-lg bg-surfaceLight/30 px-3 py-2 font-mono text-xs text-white/50">{entry}</p>
            ))
          )}
        </div>
      </div>

      <Modal isOpen={modal === "spawn"} onClose={() => setModal(null)} title="Spawn New Agents">
        <p className="text-sm text-white/50">Spawn a batch of new AI agents into the simulation with randomized roles.</p>
        <Button className="mt-5 w-full" onClick={() => runAction("Spawned 5 new agents into Central Hub")}>Confirm Spawn</Button>
      </Modal>
      <Modal isOpen={modal === "remove"} onClose={() => setModal(null)} title="Remove Agents">
        <p className="text-sm text-white/50">Remove offline or underperforming agents from the active simulation.</p>
        <Button variant="danger" className="mt-5 w-full" onClick={() => runAction("Removed 3 offline agents")}>Confirm Removal</Button>
      </Modal>
      <Modal isOpen={modal === "resource"} onClose={() => setModal(null)} title="Add Resources">
        <p className="text-sm text-white/50">Inject additional resources into a selected zone to balance the economy.</p>
        <Button className="mt-5 w-full" onClick={() => runAction("Added 500 units of Energy to North Ridge")}>Confirm Injection</Button>
      </Modal>
      <Modal isOpen={modal === "weather"} onClose={() => setModal(null)} title="Change Weather">
        <p className="text-sm text-white/50">Trigger a weather change event that will affect agent behavior across zones.</p>
        <Button className="mt-5 w-full" onClick={() => runAction("Triggered storm event in Coastal Bay")}>Confirm Change</Button>
      </Modal>
    </div>
  );
}