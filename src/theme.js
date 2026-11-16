// Shared theme store. "auto" follows the device (and switches live with it); light/dark are remembered.
import { useSyncExternalStore } from "react";

const KEY = "om-theme";
const listeners = new Set();
const mq = window.matchMedia("(prefers-color-scheme: dark)");

let mode = (() => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : "auto";
  } catch {
    return "auto";
  }
})();

const apply = () => {
  const theme = mode === "auto" ? (mq.matches ? "dark" : "light") : mode;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#1a1117" : "#fff7f9");
};

mq.addEventListener("change", () => mode === "auto" && apply());
apply();

export const setMode = (next) => {
  mode = next;
  try {
    next === "auto" ? localStorage.removeItem(KEY) : localStorage.setItem(KEY, next);
  } catch {
    /* storage blocked: lasts for this visit */
  }
  apply();
  listeners.forEach((l) => l());
};

export const useThemeMode = () => useSyncExternalStore((l) => (listeners.add(l), () => listeners.delete(l)), () => mode);
