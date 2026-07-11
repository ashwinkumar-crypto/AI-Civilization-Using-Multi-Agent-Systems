import { useMemo } from "react";
import ReactFlow, { Background, Controls, Edge, MarkerType, Node } from "reactflow";
import "reactflow/dist/style.css";
import { networkNodes, networkEdges } from "@/data/communications.data";

export default function TrustNetworkGraph() {
  const nodes: Node[] = useMemo(
    () =>
      networkNodes.map((n, i) => ({
        id: n.id,
        data: { label: `${n.label} (${n.trustScore})` },
        position: { x: (i % 5) * 180, y: Math.floor(i / 5) * 130 },
        style: {
          background: "#121828",
          color: "#fff",
          border: `1px solid ${n.trustScore > 70 ? "#22c55e" : n.trustScore > 40 ? "#f59e0b" : "#ef4444"}`,
          borderRadius: 12,
          fontSize: 11,
          padding: 8,
        },
      })),
    []
  );

  const edges: Edge[] = useMemo(
    () =>
      networkEdges.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        animated: e.weight > 70,
        style: { stroke: e.weight > 70 ? "#3b82f6" : "#8b5cf640" },
        markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" },
      })),
    []
  );

  return (
    <div className="glass-card h-[480px] p-2">
      <ReactFlow nodes={nodes} edges={edges} fitView proOptions={{ hideAttribution: true }}>
        <Background color="#1e2536" gap={20} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}