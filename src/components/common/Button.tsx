import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "danger" | "success";
  icon?: ReactNode;
  children: ReactNode;
}

const VARIANTS = {
  primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow",
  ghost: "border border-border text-white/80 hover:bg-white/5 hover:border-white/20",
  danger: "bg-danger/10 border border-danger/30 text-danger hover:bg-danger/20",
  success: "bg-success/10 border border-success/30 text-success hover:bg-success/20",
};

export default function Button({ variant = "primary", icon, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
