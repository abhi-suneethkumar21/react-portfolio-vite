import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
