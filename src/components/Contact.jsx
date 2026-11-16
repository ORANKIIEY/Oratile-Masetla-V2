import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import resume from "../data/resume";
import Icon from "./Icon";
import Logo from "./Logo";
import { Reveal, LineReveal, Parallax } from "./Motion";
import { PlaneIllo, Heart } from "./Illustrations";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const lenis = useLenis();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(resume.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${resume.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-pink px-5 pb-10 pt-24 text-[var(--onpink)] sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.3fr_0.7fr] [&>*]:min-w-0">
          <div>
            <Reveal><p className="hand text-3xl sm:text-4xl">got an idea, a role or a hackathon team?</p></Reveal>
            <h2 className="mt-3 text-[clamp(3.4rem,11vw,9.5rem)] font-black uppercase leading-[0.85] tracking-[-0.055em]">
              <LineReveal lines={["Let's work", "together"]} />
            </h2>
          </div>
          <Parallax speed={40} className="mx-auto w-64 sm:w-80"><PlaneIllo className="w-full" /></Parallax>
        </div>

        <Reveal className="mt-12">
          <a href={`mailto:${resume.email}`} className="group inline-flex flex-wrap items-center gap-3 break-all text-[clamp(1.4rem,4vw,3rem)] font-extrabold tracking-tight">
            <span className="border-b-4 border-current pb-1">{resume.email}</span>
            <motion.span whileHover={{ x: 6, y: -6 }}><Icon name="external" size={36} /></motion.span>
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={copy} className="inline-flex items-center gap-2 rounded-full bg-[var(--onpink)] px-6 py-3.5 font-semibold text-pink transition-transform hover:-translate-y-1" aria-live="polite">
              <Icon name="copy" size={18} /> {copied ? "Copied!" : "Copy email"}
            </button>
            <a href={resume.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-canvas transition-transform hover:-translate-y-1">
              <Icon name="linkedin" size={18} /> LinkedIn
            </a>
            <a href={resume.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-canvas transition-transform hover:-translate-y-1">
              <Icon name="github" size={18} /> GitHub
            </a>
            <NavLink to="/resume" className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 font-semibold underline decoration-2 underline-offset-4">
              View résumé
            </NavLink>
          </div>
        </Reveal>

        <footer className="mt-24 flex flex-col items-center justify-between gap-4 text-sm font-semibold sm:flex-row">
          <Logo className="text-[var(--onpink)] [&_span]:!text-[var(--onpink)]" />
          <span className="flex items-center gap-2">Made with care in Cape Town <Heart className="h-5 w-5" fill="var(--onpink)" /></span>
          <button onClick={() => lenis?.scrollTo(0, { duration: 1.6 })} className="inline-flex items-center gap-1.5">
            Back to top <Icon name="up" size={16} />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
