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
      className="neo-btn relative flex h-12 w-20 items-center border-4 border-neo-black bg-neo-white px-1 shadow-neo-sm dark:border-neo-white dark:bg-neo-dark-card dark:shadow-neo-dark-sm"
    >
      <span
        className={`pointer-events-none flex h-8 w-8 items-center justify-center border-3 border-neo-black bg-neo-yellow text-xl transition-transform ${
          isDark ? "translate-x-0" : "translate-x-6"
        } dark:border-neo-white`}
      >
        {isDark ? "☾" : "☀︎"}
      </span>
    </button>
  );
}