import { NavLink } from "react-router-dom";
import resume from "../data/resume";
import Icon from "../components/Icon";
import { Reveal } from "../components/Motion";

const Section = ({ title, children }) => (
  <Reveal className="resume-section mt-12 grid grid-cols-1 gap-4 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-10">
    <h2 className="hand text-3xl text-pinkdeep">{title}</h2>
    <div>{children}</div>
  </Reveal>
);

const Resume = () => (
  <main className="resume-page min-h-screen bg-canvas px-5 pb-20 pt-28 sm:px-8">
    <div className="mx-auto max-w-5xl">
      <div className="resume-toolbar flex items-center justify-between">
        <NavLink to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-pink"><Icon name="back" size={16} /> Back to portfolio</NavLink>
        <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-[var(--onpink)]">
          <Icon name="download" size={16} /> Download PDF
        </button>
      </div>

      <header className="mt-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="text-[clamp(2.8rem,7vw,5rem)] font-black leading-[0.9] tracking-[-0.05em]">{resume.name}</h1>
          <p className="mt-3 text-lg font-semibold text-ink/70">{resume.title} · {resume.location}</p>
        </div>
        <div className="text-sm leading-7 text-ink/70">
          <a href={`mailto:${resume.email}`} className="block hover:text-pink">{resume.email}</a>
          <a href={resume.githubUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-pink">{resume.github}</a>
          <a href={resume.linkedinUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-pink">{resume.linkedin}</a>
        </div>
      </header>

      <Section title="summary"><p className="text-xl leading-relaxed">{resume.summary}</p></Section>

      <Section title="experience">
        <div className="space-y-8">
          {resume.experience.map((j) => (
            <article key={j.role + j.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                <h3 className="text-xl font-extrabold tracking-tight">{j.role} <span className="font-medium text-ink/55">at {j.company}</span></h3>
                <p className="text-sm text-ink/55">{j.period}</p>
              </div>
              <ul className="mt-2 space-y-1">{j.points.map((p) => <li key={p} className="leading-relaxed text-ink/75">{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="projects">
        <div className="space-y-6">
          {resume.projects.map((p) => (
            <article key={p.name}>
              <h3 className="text-lg font-extrabold tracking-tight">{p.name} <span className="text-sm font-medium text-ink/55">{p.stack}</span></h3>
              <p className="leading-relaxed text-ink/75">{p.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="hackathons">
        <ul className="grid gap-2 sm:grid-cols-2">
          {resume.hackathons.map((h) => <li key={h.name} className="leading-relaxed"><span className="font-bold">{h.name}</span> <span className="text-ink/55">{h.date}, {h.format}{h.built ? `, built ${h.built}` : ""}</span></li>)}
        </ul>
      </Section>

      <Section title="skills">
        <div className="space-y-3">
          {resume.skills.map((g) => (
            <p key={g.group} className="leading-relaxed"><span className="mr-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/50">{g.group.toLowerCase()}</span>{g.items.join(", ")}</p>
          ))}
        </div>
      </Section>

      <Section title="certificates">
        <ul className="grid gap-2 sm:grid-cols-2">
          {resume.certifications.map((c) => <li key={c.name}><span className="font-bold">{c.name}</span> <span className="text-ink/55">{c.issuer}, {c.date}</span></li>)}
        </ul>
      </Section>

      <Section title="education">
        {resume.education.map((e) => (
          <p key={e.school} className="leading-relaxed"><span className="font-bold">{e.degree}</span>, {e.school} <span className="text-ink/55">({e.period})</span></p>
        ))}
      </Section>
    </div>
  </main>
);

export default Resume;
