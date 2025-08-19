import React from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import { Menu, Linkedin, Mail } from "lucide-react";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium hover:text-brand-600 dark:hover:text-brand-400 transition"
  >
    {children}
  </a>
);

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gray-100/80 dark:bg-[#0b1220]/70 border-b border-gray-200 dark:border-white/5">
      <div className="container-max flex items-center justify-between h-16">
        <a href="#" className="font-extrabold text-lg tracking-tight">
          <span className="text-brand-600"></span>Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Tech</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:abhi.suneeth@gmail.com"
            className="btn-ghost"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          {/* <a
            href="https://github.com/yourhandle"
            target="_blank"
            className="btn-ghost"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a> */}
          <a
            href="https://www.linkedin.com/in/abhisheksuneeth/"
            target="_blank"
            className="btn-ghost"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
}
