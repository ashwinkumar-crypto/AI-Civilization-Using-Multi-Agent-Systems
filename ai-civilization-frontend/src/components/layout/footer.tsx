import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/utils/constants";

const FOOTER_LINKS = {
  Product: ["Features", "Architecture", "Tech Stack", "Simulation"],
  Resources: ["Documentation", "Research Papers", "API Reference", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "License"],
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="text-lg font-semibold">{APP_NAME}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50">{APP_TAGLINE}</p>
            <div className="mt-6 flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-white/60 transition-colors hover:border-primary/50 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-white/40 md:flex-row">
          <p>© 2026 {APP_NAME}. Built for National Level Hackathon.</p>
          <p>Multi-Agent Systems Research Platform</p>
        </div>
      </div>
    </footer>
  );
}