import { usersData } from "@/data/users.data";
import { formatTimeAgo } from "@/utils/formatters";
import { cn } from "@/utils/cn";

const STATUS_STYLES: Record<string, string> = {
  active: "border-success/30 text-success bg-success/10",
  suspended: "border-danger/30 text-danger bg-danger/10",
  invited: "border-warning/30 text-warning bg-warning/10",
};

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">User Management</h1>
      <p className="mt-1 text-sm text-white/40">Manage researcher and administrator accounts.</p>

      <div className="mt-6 glass-card overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/60 text-xs uppercase text-white/30">
              <th className="px-5 py-4">Name</th>
              <th className="px-5 py-4">Email</th>
              <th className="px-5 py-4">Role</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Last Active</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((u) => (
              <tr key={u.id} className="border-b border-border/30 last:border-0 hover:bg-white/[0.02]">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-semibold text-white">
                      {u.name.charAt(0)}
                    </div>
                    <span className="text-white/80">{u.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-white/50">{u.email}</td>
                <td className="px-5 py-4 capitalize text-white/50">{u.role}</td>
                <td className="px-5 py-4">
                  <span className={cn("rounded-full border px-2.5 py-1 text-xs capitalize", STATUS_STYLES[u.status])}>
                    {u.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-xs text-white/30">{formatTimeAgo(u.lastActive)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}