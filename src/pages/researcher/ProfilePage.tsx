import { useAuth } from "@/hooks/useAuth";
import { Mail, ShieldCheck, Calendar } from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Profile</h1>
      <p className="mt-1 text-sm text-white/40">Your researcher account details.</p>

      <div className="mt-6 max-w-lg glass-card p-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-2xl font-semibold text-white shadow-glow">
          {user?.avatarInitials}
        </div>
        <h2 className="mt-4 text-lg font-semibold text-white">{user?.name}</h2>
        <p className="text-sm text-white/40">Senior AI Researcher</p>

        <div className="mt-6 space-y-3 text-left">
          <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-surfaceLight/30 p-3 text-sm text-white/70">
            <Mail size={16} className="text-primary-light" /> {user?.email}
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-surfaceLight/30 p-3 text-sm text-white/70">
            <ShieldCheck size={16} className="text-accent-light" /> Role: {user?.role}
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-surfaceLight/30 p-3 text-sm text-white/70">
            <Calendar size={16} className="text-secondary-light" /> Member since Jan 2026
          </div>
        </div>
      </div>
    </div>
  );
}