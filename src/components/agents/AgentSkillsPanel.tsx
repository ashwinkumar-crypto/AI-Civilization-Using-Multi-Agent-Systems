import { AgentSkill } from "@/types/agent.types";

export default function AgentSkillsPanel({ skills }: { skills: AgentSkill[] }) {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between text-xs">
            <span className="text-white/70">{skill.name}</span>
            <span className="text-white/40">{skill.level}%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}