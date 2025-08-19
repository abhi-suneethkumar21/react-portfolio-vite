import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 py-10 border-t border-black/5 dark:border-white/10">
      <div className="container-max text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Abhishek T Suneeth Kumar. All rights
          reserved.
        </p>
        <p className="text-gray-500">Built with React + Vite + Tailwind</p>
      </div>
    </footer>
  );
}
