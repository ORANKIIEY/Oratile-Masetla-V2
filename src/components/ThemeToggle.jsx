import { motion } from "framer-motion";
import { setMode, useThemeMode } from "../theme";
import Icon from "./Icon";

const modes = [
  { id: "auto", icon: "auto", label: "Follow my device" },
  { id: "light", icon: "sun", label: "Light theme" },
  { id: "dark", icon: "moon", label: "Dark theme" },
];

const ThemeToggle = () => {
  const mode = useThemeMode();
  return (
    <div role="radiogroup" aria-label="Colour theme" className="relative flex items-center rounded-full bg-surface p-1">
      {modes.map((m) => {
        const on = mode === m.id;
        return (
          <button key={m.id} role="radio" aria-checked={on} aria-label={m.label} title={m.label} onClick={() => setMode(m.id)} className="relative flex h-8 w-8 items-center justify-center rounded-full">
            {on && <motion.span layoutId="theme-pill" className="absolute inset-0 rounded-full bg-pink" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
            <span className={`relative ${on ? "text-[var(--onpink)]" : "text-ink/60"}`}><Icon name={m.icon} size={16} /></span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
