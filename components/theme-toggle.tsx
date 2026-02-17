"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-16 items-center rounded-full border border-slate-700 bg-slate-900 px-1 text-xs font-medium text-slate-300 shadow-sm ring-0 transition-colors hover:border-accent-blue/70 hover:text-slate-50"
    >
      <span
        className={`pointer-events-none inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-900 shadow-glow transition-transform ${
          isDark ? "translate-x-0" : "translate-x-6"
        }`}
      >
        {isDark ? "☾" : "☀︎"}
      </span>
    </button>
  );
}

