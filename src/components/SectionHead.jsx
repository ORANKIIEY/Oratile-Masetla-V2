import { LineReveal, Reveal } from "./Motion";

// Big section title with a small index and a handwritten aside.
const SectionHead = ({ index, title, note, children }) => (
  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <Reveal y={16}>
        <p className="text-sm font-bold tracking-[0.2em] text-pink">{index}</p>
      </Reveal>
      <h2 className="mt-2 text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.9] tracking-[-0.05em]">
        <LineReveal lines={[title]} />
      </h2>
      {note && (
        <Reveal y={10} delay={0.2}>
          <p className="hand mt-1 -rotate-2 text-2xl text-pinkdeep sm:text-3xl">{note}</p>
        </Reveal>
      )}
    </div>
    {children}
  </div>
);

export default SectionHead;
