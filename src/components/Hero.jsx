import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import portrait from "../assets/ora-portrait.png";
import resume from "../data/resume";
import Icon from "./Icon";
import { ease } from "./Motion";
import { Sparkle, Heart, CodeTag, CurlyArrow, Squiggle } from "./Illustrations";

const skills = ["Java", "Spring Boot", "React", "Python", "FastAPI", "PostgreSQL", "Docker", "Cybersecurity", "Nmap", "Azure", "AWS", "SQL"];

const Hero = () => {
  const ref = useRef(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const nameX = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const nameX2 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const go = (id) => lenis?.scrollTo(`#${id}`, { offset: -80, duration: 1.4 });

  return (
    <section ref={ref} id="top" className="relative overflow-hidden bg-canvas pt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-6 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] [&>*]:min-w-0">
        {/* words */}
        <motion.div style={{ opacity: fade }} className="relative z-10 pb-10 lg:pb-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.5 }} className="hand flex items-center gap-2 text-3xl text-pinkdeep sm:text-4xl">
            hi there, I'm Ora
            <Heart className="h-7 w-7 floaty" />
          </motion.p>

          <h1 className="mt-3 font-black uppercase leading-[0.82] tracking-[-0.055em]">
            <span className="block overflow-hidden">
              <motion.span style={{ x: nameX }} initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.6 }} className="block text-[clamp(3.3rem,8.4vw,7.6rem)]">Oratile</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span style={{ x: nameX2 }} initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.7 }} className="block text-[clamp(3.3rem,8.4vw,7.6rem)] text-pink">Masetla</motion.span>
            </span>
          </h1>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.95 }}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75 sm:text-xl">
              Software engineer in training at <span className="mark font-semibold text-ink">WeThinkCode_</span>. I build full-stack apps in Java, React and Python, and I care a lot about keeping people safe online.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => go("work")} className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-canvas transition-transform hover:-translate-y-1">
                See my work <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => go("contact")} className="rounded-full bg-pink px-7 py-4 font-semibold text-[var(--onpink)] transition-transform hover:-translate-y-1">
                Say hello
              </button>
              <a href={resume.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-surface transition-colors hover:bg-surface2"><Icon name="github" /></a>
              <a href={resume.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full bg-surface transition-colors hover:bg-surface2"><Icon name="linkedin" /></a>
            </div>
          </motion.div>
        </motion.div>

        {/* photo on a solid circle with stickers */}
        <motion.div style={{ y: photoY }} className="relative mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px]">
          <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.1, ease, delay: 0.4 }} className="absolute bottom-0 left-1/2 aspect-square w-[92%] -translate-x-1/2 rounded-full bg-pink" />
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease, delay: 0.55 }} className="absolute -right-2 top-[18%] h-24 w-24 rounded-full bg-butter sm:h-28 sm:w-28" />
          <motion.img
            src={portrait}
            alt="Oratile Masetla in a pink blazer"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.6 }}
            className="relative z-10 mx-auto block w-[86%] select-none"
            draggable="false"
          />
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: "spring" }} className="absolute left-0 top-[30%] z-20 floaty"><CodeTag className="h-14 w-20 sm:h-16 sm:w-24" /></motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.35, type: "spring" }} className="absolute right-[6%] top-[6%] z-20"><Sparkle className="h-12 w-12 floaty" /></motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: "spring" }} className="absolute bottom-[22%] right-0 z-20"><Heart className="h-10 w-10 floaty" fill="var(--lilac)" /></motion.div>
          <motion.p initial={{ opacity: 0, rotate: -12 }} animate={{ opacity: 1, rotate: -6 }} transition={{ delay: 1.6, duration: 0.8 }} className="hand absolute -left-4 bottom-[12%] z-20 rounded-2xl bg-canvas px-3 py-1 text-xl text-ink sm:-left-10 sm:text-2xl">
            Cape Town based
          </motion.p>
        </motion.div>
      </div>

      <div className="relative z-20 mx-auto -mt-2 hidden max-w-7xl items-center gap-3 px-8 pb-6 lg:flex">
        <CurlyArrow className="h-14 w-20 -scale-x-100" />
        <p className="hand text-2xl text-ink/70">scroll, there's a lot to see</p>
        <Squiggle className="ml-2 h-6 w-28" />
      </div>

      {/* skills band */}
      <div className="relative z-20 -rotate-1 bg-pink py-4 text-[var(--onpink)]">
        <div className="flex w-max marquee">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-xl font-bold uppercase tracking-tight sm:text-2xl">
              {s} <span className="text-2xl">✿</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
