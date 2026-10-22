"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "tg_theme";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val === "light" || val === "dark" || val === "system") return val;
  } catch {}
  return "system";
}

function applyDomClass(resolved: "light" | "dark") {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (resolved === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

function subscribe(callback: () => void) {
  listeners.add(callback);

  const mql = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  const handleMediaChange = () => {
    const stored = getStoredTheme();
    if (stored === "system") {
      applyDomClass(getSystemTheme());
      callback();
    }
  };
  mql?.addEventListener("change", handleMediaChange);

  return () => {
    listeners.delete(callback);
    mql?.removeEventListener("change", handleMediaChange);
  };
}

export function setTheme(newTheme: Theme) {
  try {
    if (newTheme === "system") {
      localStorage.removeItem(STORAGE_KEY);
      applyDomClass(getSystemTheme());
    } else {
      localStorage.setItem(STORAGE_KEY, newTheme);
      applyDomClass(newTheme);
    }
  } catch {}
  notify();
}

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    getStoredTheme,
    (): Theme => "system"
  );

  const systemTheme = useSyncExternalStore<"light" | "dark">(
    subscribe,
    getSystemTheme,
    (): "light" | "dark" => "light"
  );

  const resolvedTheme: "light" | "dark" = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
