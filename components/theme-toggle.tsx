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
      className="relative flex h-8 w-14 items-center rounded-full border border-slate-200 bg-slate-100 px-1 transition-all hover:border-accent-blue/50 dark:border-slate-800 dark:bg-slate-900"
    >
      <span
        className={`pointer-events-none flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] shadow-sm transition-all dark:bg-accent-blue dark:text-slate-950 ${
          isDark ? "translate-x-0" : "translate-x-6"
        }`}
      >
        {isDark ? "☾" : "☀︎"}
      </span>
    </button>
  );
}

