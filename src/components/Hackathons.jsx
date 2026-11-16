import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import resume from "../data/resume";
import Icon from "./Icon";
import { Reveal, Parallax } from "./Motion";
import { TrophyIllo } from "./Illustrations";
import SectionHead from "./SectionHead";

const stats = [
  { value: resume.hackathonCount, label: "hackathons" },
  { value: "126+", label: "hours of hacking" },
  { value: "Top 10", label: "at GirlCode Jo'burg" },
  { value: "1", label: "solo build" },
];

const Hackathons = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="hackathons" className="relative overflow-hidden bg-canvas px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead index="03" title="Hackathons" note="where I learn the fastest">
          <Parallax speed={30} className="w-52 shrink-0 sm:w-72"><TrophyIllo className="w-full" /></Parallax>
        </SectionHead>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <dd className="text-[clamp(2.6rem,5.5vw,4.4rem)] font-black leading-none tracking-[-0.05em]" style={{ color: i === 2 ? "var(--pink)" : "var(--ink)" }}>{s.value}</dd>
              <dt className="hand mt-1 text-2xl text-ink/65">{s.label}</dt>
            </Reveal>
          ))}
        </dl>

        <ol className="mt-16">
          {resume.hackathons.map((h, i) => {
            const on = open === i;
            return (
              <Reveal as="li" key={h.name} delay={i * 0.03}>
                <motion.div
                  onMouseEnter={() => setOpen(i)}
                  className={`rounded-[1.75rem] px-4 transition-colors duration-300 sm:px-6 ${on ? "bg-surface" : ""}`}
                >
                  <button onClick={() => setOpen(on ? -1 : i)} aria-expanded={on} className="flex w-full items-center gap-4 py-5 text-left sm:gap-6">
                    <span className="h-3.5 w-3.5 shrink-0 rounded-full" style={{ background: h.color }} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">{h.name}</span>
                      <span className="mt-1 block text-sm text-ink/55">{h.date} · {h.format} · {h.place}</span>
                    </span>
                    {h.highlight && <span className="hand hidden text-2xl text-pinkdeep sm:block">top 10!</span>}
                    <motion.span animate={{ rotate: on ? 90 : 0 }} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas">
                      <Icon name="arrow" size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <div className="flex flex-col gap-4 pb-6 pl-8 sm:flex-row sm:items-end sm:justify-between sm:pl-10">
                          <p className="max-w-2xl text-lg leading-relaxed text-ink/75">{h.story}</p>
                          <div className="flex shrink-0 flex-wrap items-center gap-3">
                            <span className="rounded-full px-4 py-2 text-sm font-semibold text-ink" style={{ background: h.color + "40" }}>{h.result}</span>
                            {h.slug && (
                              <NavLink to={`/projects/${h.slug}`} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-canvas">
                                See {h.built} <Icon name="arrow" size={16} />
                              </NavLink>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-16">
          <p className="hand text-3xl text-pinkdeep">also out in the community</p>
          <p className="mt-3 max-w-5xl text-xl font-semibold leading-relaxed tracking-tight text-ink/80 sm:text-2xl">
            {resume.community.map((c, i) => (
              <span key={c.name}>
                {c.name} <span className="font-normal text-ink/50">({c.detail.toLowerCase()})</span>{i < resume.community.length - 1 && <span className="text-pink"> · </span>}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Hackathons;
