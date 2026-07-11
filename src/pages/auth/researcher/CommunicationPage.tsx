import { communicationLogsData, broadcastEventsData } from "@/data/communications.data";
import TrustNetworkGraph from "@/components/network/TrustNetworkGraph";
import { formatTimeAgo } from "@/utils/formatters";
import { Radio, MessageSquare } from "lucide-react";

export default function CommunicationPage() {
  const totalMessages = communicationLogsData.length;
  const trades = communicationLogsData.filter((c) => c.type === "trade").length;
  const alliances = communicationLogsData.filter((c) => c.type === "alliance").length;
  const conflicts = communicationLogsData.filter((c) => c.type === "conflict").length;

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Communication Network</h1>
      <p className="mt-1 text-sm text-white/40">Message flow, trust links, and broadcast events between agents.</p>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Total Messages", value: totalMessages },
          { label: "Trades", value: trades },
          { label: "Alliances", value: alliances },
          { label: "Conflicts", value: conflicts },
        ].map((s) => (
          <div key={s.label} className="glass-card p-5 text-center">
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className="mt-1 text-xs text-white/40">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold text-white/80">Network Graph</h3>
        <TrustNetworkGraph />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <MessageSquare size={16} className="text-primary-light" />
            <h3 className="text-sm font-semibold text-white/80">Recent Messages</h3>
          </div>
          <div className="max-h-96 space-y-3 overflow-y-auto pr-1">
            {communicationLogsData.slice(0, 15).map((log) => (
              <div key={log.id} className="rounded-xl border border-border/40 bg-surfaceLight/30 p-3">
                <p className="text-xs text-white/40">{log.fromAgentId} → {log.toAgentId} · <span className="capitalize">{log.type}</span></p>
                <p className="mt-1 text-sm text-white/70">{log.content}</p>
                <p className="mt-1 text-xs text-white/25">{formatTimeAgo(log.timestamp)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Radio size={16} className="text-accent-light" />
            <h3 className="text-sm font-semibold text-white/80">Broadcast Events</h3>
          </div>
          <div className="max-h-96 space-y-3 overflow-y-auto pr-1">
            {broadcastEventsData.map((b) => (
              <div key={b.id} className="rounded-xl border border-border/40 bg-surfaceLight/30 p-3">
                <p className="text-sm text-white/70">{b.message}</p>
                <p className="mt-1 text-xs text-white/30">
                  From {b.senderAgentId} · Reached {b.reach} agents · {formatTimeAgo(b.timestamp)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}