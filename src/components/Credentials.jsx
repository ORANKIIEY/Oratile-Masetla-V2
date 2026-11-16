import resume from "../data/resume";
import Icon from "./Icon";
import { Reveal, Parallax } from "./Motion";
import { CertificateIllo } from "./Illustrations";
import SectionHead from "./SectionHead";

const tagColor = { Security: "var(--pink)", Cloud: "var(--sky)", Data: "var(--mint)", Code: "var(--lilac)" };

const Credentials = () => (
  <section id="credentials" className="relative overflow-hidden bg-canvas px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-7xl">
      <SectionHead index="05" title="Certificates" note={`${resume.certifications.length} and counting`}>
        <Parallax speed={30} className="w-52 shrink-0 sm:w-72"><CertificateIllo className="w-full" /></Parallax>
      </SectionHead>

      <ul className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {resume.certifications.map((c, i) => (
          <Reveal as="li" key={c.name} delay={(i % 3) * 0.06} className="group flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-ink transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" style={{ background: tagColor[c.tag] }}>
              <Icon name="certificate" size={22} />
            </span>
            <span>
              <span className="block text-lg font-bold leading-snug tracking-tight">{c.name}</span>
              <span className="hand block text-xl text-pinkdeep">{c.issuer}</span>
              <span className="mt-0.5 block text-sm text-ink/50">{c.tag} · {c.date}</span>
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Credentials;
