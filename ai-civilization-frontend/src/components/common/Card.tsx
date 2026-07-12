import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export default function Card({ children, hoverable = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hoverable && "transition-all hover:border-primary/40 hover:shadow-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}