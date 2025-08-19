// src/components/SkillsMatrix.jsx
import React from "react";
import skills from "../data/skills.js";
import { Code2, ServerCog, Cloud, Lock, ListChecks, Users } from "lucide-react";

const iconMap = {
  Code2,
  ServerCog,
  Cloud,
  Lock,
  ListChecks,
  Users,
};

export default function SkillsMatrix() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map(({ category, icon, items }) => {
          const Icon = iconMap[icon] || Code2;
          return (
            <div key={category} className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-2 rounded-xl bg-brand-600/10 text-brand-600">
                  <Icon size={18} />
                </span>
                <h3 className="font-semibold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="text-sm px-2.5 py-1.5 rounded-lg bg-black/5 dark:bg-white/10"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
