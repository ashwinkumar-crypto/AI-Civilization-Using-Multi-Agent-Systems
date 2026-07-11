import { tasksData, TaskStatus } from "@/data/tasks.data";
import { cn } from "@/utils/cn";
import { formatTimeAgo } from "@/utils/formatters";

const STATUS_STYLES: Record<TaskStatus, string> = {
  pending: "border-white/10 text-white/40",
  "in-progress": "border-primary/30 text-primary-light bg-primary/10",
  completed: "border-success/30 text-success bg-success/10",
  failed: "border-danger/30 text-danger bg-danger/10",
};

const PRIORITY_STYLES: Record<string, string> = {
  low: "text-white/30",
  medium: "text-warning",
  high: "text-danger",
};

export default function TaskManagerPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Task Manager</h1>
      <p className="mt-1 text-sm text-white/40">Track and manage all 20 active simulation tasks.</p>

      <div className="mt-6 glass-card overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/60 text-xs uppercase text-white/30">
              <th className="px-5 py-4">Task</th>
              <th className="px-5 py-4">Assigned Agent</th>
              <th className="px-5 py-4">Zone</th>
              <th className="px-5 py-4">Priority</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Created</th>
            </tr>
          </thead>
          <tbody>
            {tasksData.map((task) => (
              <tr key={task.id} className="border-b border-border/30 last:border-0 hover:bg-white/[0.02]">
                <td className="px-5 py-4 text-white/80">{task.title}</td>
                <td className="px-5 py-4 font-mono text-xs text-white/50">{task.assignedAgentId}</td>
                <td className="px-5 py-4 text-white/50">{task.zone}</td>
                <td className={cn("px-5 py-4 capitalize", PRIORITY_STYLES[task.priority])}>{task.priority}</td>
                <td className="px-5 py-4">
                  <span className={cn("rounded-full border px-2.5 py-1 text-xs capitalize", STATUS_STYLES[task.status])}>
                    {task.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-xs text-white/30">{formatTimeAgo(task.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}