import React from "react";

export default function ProjectCard({ title, description, tags }) {
  return (
    <article className="card p-5 hover:shadow-xl transition">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-brand-600 dark:text-brand-400">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
