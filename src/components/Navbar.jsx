import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useLenis } from "lenis/react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import Icon from "./Icon";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "hackathons", label: "Hackathons" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });

  useLenis(({ scroll }) => setSolid(scroll > 40));

  useEffect(() => {
    if (pathname !== "/") return setActive("");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    const t = setTimeout(() => links.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el); }), 400);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [pathname]);

  const go = (id) => {
    setOpen(false);
    if (pathname !== "/") return navigate(`/#${id}`);
    lenis ? lenis.scrollTo(`#${id}`, { offset: -80, duration: 1.4 }) : document.getElementById(id)?.scrollIntoView();
  };

  return (
    <nav aria-label="Main" className={`no-print fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${solid || open ? "bg-canvas/90 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <button onClick={() => (pathname === "/" ? lenis?.scrollTo(0, { duration: 1.4 }) : navigate("/"))} aria-label="Oratile Masetla, home" className="transition-transform hover:-rotate-2">
          <Logo />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="relative rounded-full px-4 py-2 text-sm font-medium">
              {active === l.id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-surface" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
              <span className={`relative transition-colors ${active === l.id ? "text-pinkdeep" : "text-ink/70 hover:text-ink"}`}>{l.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <NavLink to="/resume" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5 lg:block">
            Résumé
          </NavLink>
          <button onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="flex h-10 w-10 items-center justify-center rounded-full bg-surface lg:hidden">
            <Icon name={open ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden lg:hidden">
            <div className="flex flex-col px-5 pb-6">
              {links.map((l, i) => (
                <motion.button key={l.id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.05 * i } }} onClick={() => go(l.id)} className="py-2.5 text-left text-3xl font-bold tracking-tight">
                  {l.label}
                </motion.button>
              ))}
              <NavLink to="/resume" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-pink py-3 text-center font-semibold text-[var(--onpink)]">View résumé</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div aria-hidden className="absolute bottom-0 left-0 right-0 h-[3px] origin-left bg-pink" style={{ scaleX: progress }} />
    </nav>
  );
};

export default Navbar;
