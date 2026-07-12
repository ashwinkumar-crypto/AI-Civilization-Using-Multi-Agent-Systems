const fs = require("fs");

const loginPage = `import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Sparkles, Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/routes/routePaths";
import { APP_NAME } from "@/utils/constants";

interface AdminLoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { loginWithGoogle, loginAsAdmin, error, clearError, isLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"researcher" | "admin">("researcher");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginForm>({ defaultValues: { email: "", password: "" } });

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate(ROUTES.RESEARCHER.OVERVIEW);
    } catch {
      // error surfaced via context
    }
  };

  const onAdminSubmit = async (data: AdminLoginForm) => {
    try {
      await loginAsAdmin(data.email, data.password);
      navigate(ROUTES.ADMIN.DASHBOARD);
    } catch {
      // error surfaced via context
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
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
        </div>
      </div>

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
          <p className="mt-2 text-sm text-white/50">Sign in to access your dashboard.</p>

          <div className="mt-6 flex gap-1 rounded-xl border border-border/60 bg-surfaceLight/40 p-1">
            <button
              onClick={() => {
                setMode("researcher");
                clearError();
              }}
              className={\`flex-1 rounded-lg py-2 text-sm font-medium transition-colors \${
                mode === "researcher" ? "bg-gradient-to-r from-primary to-secondary text-white" : "text-white/50"
              }\`}
            >
              Researcher
            </button>
            <button
              onClick={() => {
                setMode("admin");
                clearError();
              }}
              className={\`flex-1 rounded-lg py-2 text-sm font-medium transition-colors \${
                mode === "admin" ? "bg-gradient-to-r from-primary to-secondary text-white" : "text-white/50"
              }\`}
            >
              Administrator
            </button>
          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
              {error}
            </div>
          )}

          {mode === "researcher" ? (
            <div className="mt-8">
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-border/60 bg-white py-3 text-sm font-medium text-gray-800 transition-all hover:shadow-glow disabled:opacity-60"
              >
                {isLoading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                  </>
                )}
              </button>
              <p className="mt-4 text-center text-xs text-white/30">
                Researcher accounts sign in with any Google account.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onAdminSubmit)} className="mt-8 space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/70">Admin Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type="email"
                    placeholder="admin@aicivilization.ai"
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

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary flex w-full items-center justify-center gap-2 disabled:opacity-60"
              >
                {isLoading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <ShieldCheck size={16} /> Sign in as Administrator
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync("src/pages/auth/LoginPage.tsx", loginPage, { encoding: "utf8" });
console.log("LoginPage.tsx rewritten successfully.");