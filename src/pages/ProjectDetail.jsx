import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import projects from "../data/projects";
import Icon from "../components/Icon";
import { Reveal, LineReveal } from "../components/Motion";
import { Art } from "../components/Projects";
import { Sparkle } from "../components/Illustrations";

const STEP_MS = 5000;

// Live site in a flat browser frame; framable sites load on click (free hosts can be slow to wake).
const Live = ({ project }) => {
  const [run, setRun] = useState(false);
  const host = new URL(project.live).host;
  return (
    <div className="overflow-hidden rounded-[2rem] bg-surface">
      <div className="flex items-center gap-3 px-5 py-3.5">
        <span className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-pink" /><span className="h-3 w-3 rounded-full bg-butter" /><span className="h-3 w-3 rounded-full bg-mint" /></span>
        <span className="mx-auto min-w-0 truncate rounded-full bg-canvas px-4 py-1.5 text-xs font-medium text-ink/60">{host}</span>
        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Open in a new tab" className="text-ink/50 hover:text-pink"><Icon name="external" size={18} /></a>
      </div>
      <div className="relative aspect-[16/10] bg-canvas">
        {run ? (
          <iframe src={project.live} title={`${project.title} live demo`} className="h-full w-full" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
        ) : (
          <>
            <Art project={project} className="h-full !rounded-none" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/35">
              {project.embed ? (
                <button onClick={() => setRun(true)} className="inline-flex items-center gap-3 rounded-full bg-pink px-7 py-4 font-semibold text-[var(--onpink)] transition-transform hover:scale-105">
                  <Icon name="play" size={18} /> Try it right here
                </button>
              ) : (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-pink px-7 py-4 font-semibold text-[var(--onpink)] transition-transform hover:scale-105">
                  Open the live dashboard <Icon name="external" size={18} />
                </a>
              )}
              {host.endsWith("onrender.com") && <p className="rounded-full bg-canvas px-4 py-1.5 text-xs text-ink/70">Free hosting: the first load can take up to a minute.</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Auto-playing walkthrough. Click a step to jump; it pauses when you do.
const Walkthrough = ({ steps }) => {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setI((n) => (n + 1) % steps.length), STEP_MS);
    return () => clearTimeout(t);
  }, [i, playing, steps.length]);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] [&>*]:min-w-0">
      <ol className="space-y-1">
        {steps.map((s, n) => (
          <li key={s.title}>
            <button onClick={() => { setI(n); setPlaying(false); }} className={`relative flex w-full items-center gap-4 overflow-hidden rounded-2xl px-4 py-3.5 text-left transition-colors ${n === i ? "bg-surface" : "hover:bg-surface/60"}`}>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${n === i ? "bg-pink text-[var(--onpink)]" : n < i ? "bg-surface2 text-ink" : "bg-surface text-ink/50"}`}>
                {n < i ? <Icon name="check" size={16} /> : n + 1}
              </span>
              <span className={`text-lg font-semibold ${n === i ? "" : "text-ink/60"}`}>{s.title}</span>
              {n === i && playing && <span key={i} className="absolute bottom-0 left-0 h-[3px] bg-pink" style={{ animation: `progress ${STEP_MS}ms linear forwards` }} />}
            </button>
          </li>
        ))}
        <li className="pt-3">
          <button onClick={() => setPlaying((p) => !p)} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas">
            <Icon name={playing ? "pause" : "play"} size={16} /> {playing ? "Pause" : "Play walkthrough"}
          </button>
        </li>
      </ol>
      <div className="relative flex min-h-[320px] flex-col justify-center rounded-[2rem] bg-pink p-8 text-[var(--onpink)] sm:p-12">
        <Sparkle className="absolute right-8 top-8 h-12 w-12 floaty" fill="var(--butter)" />
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-[clamp(5rem,12vw,9rem)] font-black leading-none tracking-tighter">{i + 1}</p>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{steps[i].title}</h3>
            <p className="mt-3 max-w-lg text-lg leading-relaxed opacity-90">{steps[i].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Label = ({ children }) => <p className="hand text-3xl text-pinkdeep">{children}</p>;

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    document.title = project ? `${project.title} · Oratile Masetla` : "Oratile Masetla";
    return () => { document.title = "Oratile Masetla · Software Engineer"; };
  }, [project]);

  if (!project)
    return (
      <main className="flex min-h-screen items-center justify-center bg-canvas px-5">
        <div className="text-center">
          <p className="hand text-3xl text-pinkdeep">oops</p>
          <h1 className="mt-2 text-5xl font-black tracking-tight">Project not found</h1>
          <NavLink to="/#work" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-canvas"><Icon name="back" size={16} /> Back to my work</NavLink>
        </div>
      </main>
    );

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="bg-canvas">
      <section className="px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <NavLink to="/#work" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-pink"><Icon name="back" size={16} /> All projects</NavLink>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-pink">{project.category} · {project.highlight} · {project.year}</p>
          <h1 className="mt-3 text-[clamp(3.2rem,10vw,8.5rem)] font-black leading-[0.88] tracking-[-0.055em]">
            <LineReveal lines={[project.title]} delay={0.3} />
          </h1>
          <Reveal delay={0.4}><p className="hand mt-4 text-3xl text-pinkdeep sm:text-4xl">{project.tagline}</p></Reveal>
          <Reveal delay={0.5}><p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/75 sm:text-xl">{project.description}</p></Reveal>
          <Reveal delay={0.55} className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-pink px-7 py-4 font-semibold text-[var(--onpink)] transition-transform hover:-translate-y-1">
                {project.liveLabel ? "View contract on Basescan" : "Open live site"} <Icon name="external" size={18} />
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-canvas transition-transform hover:-translate-y-1">
              <Icon name="github" size={18} /> Source code
            </a>
          </Reveal>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {[["Role", project.role], ["Timeline", project.timeline], ["Status", project.status], ["Year", project.year]].map(([k, v]) => (
              <Reveal key={k}>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">{k}</dt>
                <dd className="mt-1 text-lg font-semibold">{v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-5 sm:px-8">
        <Reveal className="mx-auto max-w-7xl">
          {project.live && project.image ? <Live project={project} /> : <Art project={project} className="aspect-[16/8]" />}
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dd className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-none tracking-tighter text-pink">{m.value}</dd>
                <dt className="hand mt-1 text-xl text-ink/65">{m.label.toLowerCase()}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><Label>how it works</Label></Reveal>
          <h2 className="mb-10 mt-1 text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em]"><LineReveal lines={["Step by step"]} /></h2>
          <Walkthrough steps={project.demoSteps} />
        </div>
      </section>

      <section className="bg-surface px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><Label>the story</Label></Reveal>
          <Reveal><p className="mt-3 max-w-5xl text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold leading-[1.2] tracking-tight">{project.overview}</p></Reveal>
          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2">
            {[["The problem", project.challenge], ["What I did", project.solution]].map(([k, v], n) => (
              <Reveal key={k} delay={n * 0.08}>
                <h3 className="text-2xl font-extrabold tracking-tight">{k}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink/75">{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><Label>what it does</Label></Reveal>
          <ul className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f, n) => (
              <Reveal as="li" key={f} delay={(n % 3) * 0.05} className="flex gap-4">
                <span className="text-3xl font-black leading-none text-pink">{String(n + 1).padStart(2, "0")}</span>
                <span className="text-lg leading-relaxed">{f}</span>
              </Reveal>
            ))}
          </ul>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <Label>built with</Label>
              <p className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => <span key={t} className="rounded-full bg-surface px-4 py-2 text-sm font-semibold transition-colors hover:bg-pink hover:text-[var(--onpink)]">{t}</span>)}
              </p>
            </Reveal>
            <Reveal>
              <Label>what I learned</Label>
              <ul className="mt-4 space-y-3">
                {project.learnings.map((l) => (
                  <li key={l} className="flex gap-3 text-lg leading-relaxed"><Icon name="check" size={20} className="mt-1 shrink-0 text-pink" />{l}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <nav aria-label="More projects" className="grid grid-cols-1 bg-surface sm:grid-cols-2">
        {[{ p: prev, dir: "previous" }, { p: next, dir: "next up" }].map(({ p, dir }, n) => (
          <NavLink key={dir} to={`/projects/${p.slug}`} className={`group block px-5 py-14 transition-colors hover:bg-pink hover:text-[var(--onpink)] sm:px-10 ${n ? "sm:text-right" : ""}`}>
            <p className="hand text-2xl opacity-70">{dir}</p>
            <p className="mt-2 text-[clamp(2rem,4.5vw,3.6rem)] font-black leading-none tracking-tight">{p.title}</p>
          </NavLink>
        ))}
      </nav>
    </main>
  );
};

export default ProjectDetail;
