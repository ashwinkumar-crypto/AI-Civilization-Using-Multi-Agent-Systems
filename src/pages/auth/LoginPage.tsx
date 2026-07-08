import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Sparkles, Mail, Lock, ShieldCheck, ArrowRight, Info } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { LoginCredentials } from "@/types/user.types";
import { ROUTES } from "@/routes/routePaths";
import { APP_NAME } from "@/utils/constants";

const DEMO_CREDENTIALS = [
  { role: "Researcher", email: "researcher@aicivilization.ai", password: "research123" },
  { role: "Administrator", email: "admin@aicivilization.ai", password: "admin123" },
];

export default function LoginPage() {
  const { login, error, clearError, isLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginCredentials>({
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      const user = await login(data);
      navigate(user.role === "admin" ? ROUTES.ADMIN.DASHBOARD : ROUTES.RESEARCHER.OVERVIEW);
    } catch {
      // error is surfaced via context
    }
  };

  const fillDemo = (email: string, password: string) => {
    setValue("email", email);
    setValue("password", password);
    clearError();
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left illustration panel */}
      <div className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-surface lg:flex">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.04]" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />

        <div className="relative z-10 max-w-md px-10 text-center">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-glow"
          >
            <Sparkles size={40} className="text-white" />
          </motion.div>

          <h2 className="mt-8 text-3xl font-bold tracking-tight text-white">
            Step into the simulation
          </h2>
          <p className="mt-4 text-white/50">
            Monitor autonomous agents, resource economies, and evolving trust
            networks in a living AI civilization.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {["Agents", "Resources", "Trust"].map((label, i) => (
              <motion.div
                key={label}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                className="glass-card p-4"
              >
                <p className="text-xs text-white/40">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right login form panel */}
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="text-lg font-semibold">{APP_NAME}</span>
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-white lg:mt-0">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-white/50">
            Sign in to access your dashboard.
          </p>

          {error && (
            <div className="mt-6 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  placeholder="you@aicivilization.ai"
                  className="w-full rounded-xl border border-border/60 bg-surfaceLight/50 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs text-danger">{errors.email.message}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/70">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-border/60 bg-surfaceLight/50 py-3 pl-10 pr-10 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none"
                  {...register("password", { required: "Password is required" })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="mt-1.5 text-xs text-danger">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/60">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border bg-surfaceLight accent-primary"
                  {...register("rememberMe")}
                />
                Remember me
              </label>
              <a href="#" className="text-primary-light hover:text-primary">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary flex w-full items-center justify-center gap-2 disabled:opacity-60"
            >
              {isLoading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  Log In <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 rounded-2xl border border-border/60 bg-surface/60 p-5">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-white/40">
              <Info size={14} /> Demo Credentials
            </div>
            <div className="mt-3 space-y-2">
              {DEMO_CREDENTIALS.map((cred) => (
                <button
                  key={cred.role}
                  type="button"
                  onClick={() => fillDemo(cred.email, cred.password)}
                  className="flex w-full items-center justify-between rounded-xl border border-border/50 bg-surfaceLight/40 px-4 py-3 text-left transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-accent-light" />
                    <div>
                      <p className="text-sm font-medium text-white">{cred.role}</p>
                      <p className="text-xs text-white/40">{cred.email}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-white/30">{cred.password}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}