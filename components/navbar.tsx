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
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/75 backdrop-blur dark:border-slate-800/60 dark:bg-background/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-sm font-semibold tracking-tight text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:shadow-glow">
            VB
          </div>
          <div className="hidden flex-col text-left sm:flex">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Portfolio
            </span>
            <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Vinay Bhogal
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-8">
          <ul className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 transition-colors dark:text-slate-400 sm:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
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
