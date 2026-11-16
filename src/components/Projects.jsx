import { NavLink } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import projects from "../data/projects";
import Icon from "./Icon";
import { Reveal } from "./Motion";
import { ScreensIllo } from "./Illustrations";
import SectionHead from "./SectionHead";

// Flat artwork: the real screenshot, or a solid block in the project's colour.
export const Art = ({ project, className = "" }) =>
  project.image ? (
    <div className={`overflow-hidden rounded-[2rem] bg-surface ${className}`}>
      <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" draggable="false" className="h-full w-full object-cover object-left-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
    </div>
  ) : (
    <div className={`relative flex flex-col justify-end overflow-hidden rounded-[2rem] p-[7%] ${className}`} style={{ background: project.accent }}>
      <span className="absolute right-[7%] top-[9%] text-[clamp(4rem,10vw,8rem)] font-black leading-none text-white/25">{project.title.charAt(0)}</span>
      <p className="relative text-[clamp(1.8rem,4vw,3.4rem)] font-black leading-[0.95] tracking-tight text-white">{project.title}</p>
      <p className="hand relative mt-2 text-2xl text-white/90">{project.tagline}</p>
    </div>
  );

const Panel = ({ project, i }) => (
  <article className="group relative flex w-full shrink-0 flex-col lg:w-[min(64vw,880px)]">
    <NavLink to={`/projects/${project.slug}`} aria-label={`Open ${project.title}`} className="block">
      <Art project={project} className="aspect-[16/10]" />
    </NavLink>
    <div className="mt-6 flex items-start gap-5">
      <span className="text-5xl font-black leading-none tracking-tighter text-pink">{String(i + 1).padStart(2, "0")}</span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">{project.category} · {project.year}{project.image ? " · live" : ""}</p>
        <h3 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
          <NavLink to={`/projects/${project.slug}`} className="transition-colors hover:text-pink">{project.title}</NavLink>
        </h3>
        <p className="mt-2 max-w-xl leading-relaxed text-ink/70">{project.description}</p>
        <p className="mt-3 text-sm font-medium text-ink/55">{project.technologies.slice(0, 5).join("  ·  ")}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
          <NavLink to={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-pinkdeep">
            Case study and demo <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
          </NavLink>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink/60 hover:text-ink"><Icon name="github" size={16} /> Code</a>
        </div>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const section = useRef(null);
  const track = useRef(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const raw = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(raw, { stiffness: 120, damping: 28, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useLayoutEffect(() => {
    const measure = () => setDistance(track.current ? Math.max(0, track.current.scrollWidth - window.innerWidth + 64) : 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="work" className="relative bg-surface">
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionHead index="02" title="Selected work" note="things I've built and shipped">
          <Reveal className="w-48 shrink-0 sm:w-64"><ScreensIllo className="w-full" /></Reveal>
        </SectionHead>
      </div>

      {/* desktop: pinned horizontal rail */}
      <div ref={section} className="relative hidden lg:block" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div ref={track} style={{ x }} className="flex gap-16 pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-16">
            {projects.map((p, i) => <Panel key={p.slug} project={p} i={i} />)}
          </motion.div>
          <div className="mx-auto mt-10 flex w-full max-w-7xl items-center gap-4 px-8">
            <span className="hand text-2xl text-ink/60">keep scrolling</span>
            <span className="h-1 flex-1 rounded-full bg-surface2"><motion.span className="block h-full rounded-full bg-pink" style={{ width: bar }} /></span>
            <span className="text-sm font-bold text-ink/50">{String(projects.length).padStart(2, "0")} projects</span>
          </div>
        </div>
      </div>

      {/* phones and tablets: a simple stack */}
      <div className="mx-auto flex max-w-3xl flex-col gap-16 px-5 py-16 sm:px-8 lg:hidden">
        {projects.map((p, i) => <Reveal key={p.slug}><Panel project={p} i={i} /></Reveal>)}
      </div>

      <div className="mx-auto flex max-w-7xl justify-center px-5 pb-24 pt-4 sm:px-8 lg:pt-0">
        <a href="https://github.com/ORANKIIEY?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-canvas transition-transform hover:-translate-y-1">
          <Icon name="github" size={18} /> All 28 repositories on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
