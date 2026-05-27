"use client";

import Link from "next/link";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#f1f2fb]/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-5 md:px-8">
        <Link href="#hero" className="text-2xl font-semibold text-slate-800">
          Portfolio
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                index === 0
                  ? "border-b-2 border-blue-700 pb-1 text-blue-700"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
