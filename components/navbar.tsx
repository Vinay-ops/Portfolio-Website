"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("isAdmin"));
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-neo-black bg-neo-white dark:border-neo-white dark:bg-neo-dark-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center border-4 border-neo-black bg-neo-yellow text-xl font-black tracking-tighter text-neo-black shadow-neo-sm dark:border-neo-white dark:shadow-neo-dark-sm">
            VB
          </div>
          <div className="hidden flex-col text-left sm:flex">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white">
              Developer
            </span>
            <span className="text-base font-black text-neo-black dark:text-neo-white">
              Vinay Bhogal
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          <ul className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.3em] text-neo-black dark:text-neo-white sm:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative transition-colors hover:text-neo-pink dark:hover:text-neo-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {isAdmin && (
              <li>
                <Link
                  href="/admin"
                  className="relative transition-colors hover:text-neo-pink dark:hover:text-neo-blue"
                >
                  Admin
                </Link>
              </li>
            )}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
