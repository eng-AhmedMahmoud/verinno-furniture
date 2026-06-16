"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const current = mounted ? (resolvedTheme || theme) : "light";
  const isDark = current === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-app bg-elev text-fg transition hover:text-accent hover:scale-105"
    >
      <Sun className={`h-5 w-5 transition-all ${isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`} />
    </button>
  );
}
