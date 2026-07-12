import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search..." }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border/60 bg-surfaceLight/50 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none"
      />
    </div>
  );
}