import { ReactNode, useState } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border/60 bg-surface px-3 py-1.5 text-xs text-white shadow-lg z-50">
          {content}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-surface" />
        </span>
      )}
    </span>
  );
}