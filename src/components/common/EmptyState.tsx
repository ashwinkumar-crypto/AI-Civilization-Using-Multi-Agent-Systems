import { Inbox } from "lucide-react";

export default function EmptyState({ message = "No data found." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-white/30">
      <Inbox size={32} />
      <p className="text-sm">{message}</p>
    </div>
  );
}