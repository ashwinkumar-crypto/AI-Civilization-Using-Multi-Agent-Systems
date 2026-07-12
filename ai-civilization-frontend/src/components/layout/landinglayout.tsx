import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-grid-pattern bg-grid opacity-[0.03]" />
      <div className="pointer-events-none fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none fixed top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px]" />

      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}