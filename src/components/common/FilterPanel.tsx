interface FilterOption {
  label: string;
  value: string;
}

interface FilterPanelProps {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterPanel({ label, options, value, onChange }: FilterPanelProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-white/40">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-border/60 bg-surfaceLight/50 px-3 py-2 text-sm text-white focus:border-primary/50 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-surface">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}