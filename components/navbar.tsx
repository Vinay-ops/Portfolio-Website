"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl dark:border-slate-800/50 dark:bg-[#0f0f14]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold tracking-tighter text-white dark:bg-accent-blue dark:text-slate-950">
            VB
          </div>
          <div className="hidden flex-col text-left sm:flex">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Developer
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Vinay Bhogal
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          <ul className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors dark:text-slate-400 sm:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-accent-blue dark:hover:text-accent-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
