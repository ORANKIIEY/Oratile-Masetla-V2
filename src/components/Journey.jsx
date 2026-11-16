import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import resume from "../data/resume";
import Icon from "./Icon";
import { Reveal, Parallax } from "./Motion";
import { PathIllo } from "./Illustrations";
import SectionHead from "./SectionHead";

const Journey = () => {
  const list = useRef(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 70%", "end 60%"] });

  return (
    <section id="journey" className="relative overflow-hidden bg-surface px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead index="04" title="Journey" note="how I got here">
          <Parallax speed={30} className="w-52 shrink-0 sm:w-72"><PathIllo className="w-full" /></Parallax>
        </SectionHead>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_0.6fr] [&>*]:min-w-0">
          {/* the line fills in as you scroll */}
          <ol ref={list} className="relative pl-10 sm:pl-14">
            <span className="absolute bottom-2 left-[11px] top-2 w-[3px] rounded-full bg-surface2 sm:left-[15px]" />
            <motion.span style={{ scaleY: scrollYProgress }} className="absolute bottom-2 left-[11px] top-2 w-[3px] origin-top rounded-full bg-pink sm:left-[15px]" />
            {resume.experience.map((job, i) => (
              <Reveal as="li" key={job.role + job.company} delay={0.05} className="relative pb-14 last:pb-0">
                <span className="absolute -left-10 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-pink sm:-left-14 sm:h-8 sm:w-8">
                  <span className="h-2 w-2 rounded-full bg-[var(--onpink)]" />
                </span>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-pinkdeep">{job.period}</p>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{job.role}</h3>
                <p className="hand mt-1 text-2xl text-ink/75">{job.company}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/50"><Icon name="pin" size={14} />{job.place}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed text-ink/75">
                      <Icon name="check" size={18} className="mt-0.5 shrink-0 text-pink" />{pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          <div className="space-y-12 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-ink/50"><Icon name="cap" size={18} /> Education</p>
              <ul className="mt-5 space-y-7">
                {resume.education.map((e) => (
                  <li key={e.school}>
                    <p className="text-2xl font-extrabold tracking-tight">{e.degree}</p>
                    <p className="hand text-2xl text-pinkdeep">{e.school}</p>
                    <p className="mt-1 text-sm text-ink/50">{e.period}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
