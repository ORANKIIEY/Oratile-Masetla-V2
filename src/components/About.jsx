import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import resume from "../data/resume";
import Icon from "./Icon";
import { Reveal, ScrollWords, Parallax } from "./Motion";
import { DeskIllo, Sparkle } from "./Illustrations";
import SectionHead from "./SectionHead";

const Count = ({ to }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{n}</span>;
};

const focusColor = ["var(--pink)", "var(--lilac)", "var(--sky)", "var(--mint)"];

const About = () => (
  <section id="about" className="relative overflow-hidden bg-canvas px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-7xl">
      <SectionHead index="01" title="About me" note="the short version" />

      <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] [&>*]:min-w-0">
        <ScrollWords
          className="text-[clamp(1.9rem,4.2vw,3.6rem)] font-bold leading-[1.12] tracking-[-0.03em]"
          text="I'm Oratile, but everyone calls me Ora. I study software engineering at WeThinkCode_ and hold an IT qualification from Richfield. I build full apps, from front ends to Java and Python back ends, and I test what I build for security."
        />
        <Parallax speed={40} className="relative mx-auto w-full max-w-sm">
          <DeskIllo className="w-full" />
          <Sparkle className="absolute -left-2 top-0 h-10 w-10 floaty" fill="var(--pink)" />
        </Parallax>
      </div>

      {/* numbers, no boxes */}
      <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {resume.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <dd className="text-[clamp(3.2rem,7vw,5.5rem)] font-black leading-none tracking-[-0.05em]" style={{ color: i % 2 ? "var(--ink)" : "var(--pink)" }}>
              <Count to={s.value} />
            </dd>
            <dt className="hand mt-1 text-2xl text-ink/70">{s.label.toLowerCase()}</dt>
          </Reveal>
        ))}
      </dl>

      {/* what I focus on */}
      <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-[0.6fr_1.4fr] [&>*]:min-w-0">
        <Reveal>
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">What I work on</h3>
          <p className="hand mt-2 text-2xl text-pinkdeep">four things I keep coming back to</p>
        </Reveal>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {resume.focus.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 0.06} className="group">
              <motion.span whileHover={{ rotate: -8, scale: 1.08 }} className="flex h-14 w-14 items-center justify-center rounded-2xl text-ink" style={{ background: focusColor[i] }}>
                <Icon name={f.icon} size={26} />
              </motion.span>
              <h4 className="mt-4 text-xl font-bold tracking-tight">{f.title}</h4>
              <p className="mt-2 leading-relaxed text-ink/70">{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* toolkit as plain words */}
      <div className="mt-24 space-y-6">
        <Reveal><p className="hand text-3xl text-pinkdeep">my toolkit</p></Reveal>
        {resume.skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.04} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
            <p className="w-40 shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-ink/50">{g.group.toLowerCase()}</p>
            <p className="flex flex-wrap gap-x-1 gap-y-1 text-xl font-semibold tracking-tight sm:text-2xl">
              {g.items.map((s, k) => (
                <span key={s} className="rounded-lg px-1.5 transition-colors hover:bg-pink hover:text-[var(--onpink)]">
                  {s}{k < g.items.length - 1 && <span className="ml-1 text-pink">·</span>}
                </span>
              ))}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
