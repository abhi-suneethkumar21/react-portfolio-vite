import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import SkillsMatrix from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored || "system");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, []);

  return (
    <div>
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/10 dark:bg-brand-600/10 blur-[100px]"
          style={{ animation: "blob-drift 20s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[100px]"
          style={{ animation: "blob-drift 25s ease-in-out infinite 4s reverse" }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-[80px]"
          style={{ animation: "blob-drift 18s ease-in-out infinite 8s" }}
        />
      </div>

      <Navbar theme={theme} setTheme={setTheme} />
      <main className="container-max space-y-32 sm:space-y-40">
        <Hero />
        <SkillsMatrix />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
