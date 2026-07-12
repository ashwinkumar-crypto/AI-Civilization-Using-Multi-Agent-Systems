import { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { ShieldCheck } from "lucide-react";

export interface NetworkNodeData {
  label: string;
  role: string;
  trustScore: number;
}

function trustColor(score: number) {
  if (score > 70) return "#22c55e";
  if (score > 40) return "#f59e0b";
  return "#ef4444";
}

function NetworkNode({ data }: NodeProps<NetworkNodeData>) {
  const color = trustColor(data.trustScore);

  return (
    <div
      className="rounded-xl border bg-surfaceLight/90 px-3 py-2 backdrop-blur"
      style={{ borderColor: color, minWidth: 150 }}
    >
      <Handle type="target" position={Position.Top} style={{ background: color, border: "none" }} />

      <div className="flex items-center gap-2">
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white"
          style={{ background: `linear-gradient(135deg, ${color}, #3b82f6)` }}
        >
          {data.label.slice(0, 2).toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-white">{data.label}</p>
          <p className="truncate text-[10px] text-white/40">{data.role}</p>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-1.5">
        <ShieldCheck size={11} style={{ color }} />
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full" style={{ width: `${data.trustScore}%`, background: color }} />
        </div>
        <span className="text-[10px] text-white/40">{data.trustScore}</span>
      </div>

      <Handle type="source" position={Position.Bottom} style={{ background: color, border: "none" }} />
    </div>
  );
}

export default memo(NetworkNode);
