import React from "react";
import exp from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <ol className="relative border-s border-black/10 dark:border-white/10 space-y-8 ps-6">
        {exp.map((e, i) => (
          <li key={i} className="ms-4">
            <div className="absolute w-3 h-3 bg-brand-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-[#0b1220]"></div>
            <h3 className="text-lg font-semibold">
              {e.role} ·{" "}
              <span className="text-brand-600 dark:text-brand-400">
                {e.company}
              </span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {e.range} · {e.location}
            </p>
            <ul className="mt-2 text-sm list-disc ps-5 space-y-1">
              {e.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      {/* <div className="card p-4 mt-6">
        <h3 className="font-semibold mb-2">Achievements</h3>
        <ul className="text-sm list-disc ms-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li>
            Recognized at the SaaSOps All Hands — Q4'23, Q2'24, Q3'24, Q'25
          </li>
          <li>Team Magnitude Award</li>
          <li>
            Received appreciation as a team from the MD of the company and
            various other stakeholdersr
          </li>
        </ul>
      </div> */}
    </section>
  );
}
