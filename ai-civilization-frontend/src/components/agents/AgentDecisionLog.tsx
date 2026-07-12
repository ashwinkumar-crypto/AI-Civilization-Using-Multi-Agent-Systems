import { AgentDecision } from "@/types/agent.types";
import { formatTimeAgo } from "@/utils/formatters";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

const OUTCOME_ICON = {
  success: CheckCircle2,
  failure: XCircle,
  neutral: MinusCircle,
};

const OUTCOME_COLOR = {
  success: "text-success",
  failure: "text-danger",
  neutral: "text-white/40",
};

export default function AgentDecisionLog({ decisions }: { decisions: AgentDecision[] }) {
  return (
    <div className="space-y-3">
      {decisions.map((d) => {
        const Icon = OUTCOME_ICON[d.outcome];
        return (
          <div key={d.id} className="flex gap-3 rounded-xl border border-border/50 bg-surfaceLight/30 p-3">
            <Icon size={16} className={`mt-0.5 shrink-0 ${OUTCOME_COLOR[d.outcome]}`} />
            <div>
              <p className="text-sm font-medium text-white/80">{d.action}</p>
              <p className="mt-0.5 text-xs text-white/40">{d.reasoning}</p>
              <p className="mt-1 text-xs text-white/25">{formatTimeAgo(d.timestamp)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}