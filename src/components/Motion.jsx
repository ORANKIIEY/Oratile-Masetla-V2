import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ease = [0.22, 1, 0.36, 1];

// Fades and lifts into view once.
export const Reveal = ({ as = "div", delay = 0, y = 40, className = "", children, ...rest }) => {
  const M = motion[as];
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </M>
  );
};

// Headline whose lines slide up out of a mask. The in-view trigger sits on the visible wrapper,
// because the moving line starts clipped (an observer on it would never fire).
const lineVariants = { hidden: { y: "110%" }, show: (i) => ({ y: "0%", transition: { duration: 1, ease, delay: i } }) };

export const LineReveal = ({ lines, className = "", delay = 0 }) => (
  <motion.span className={`block ${className}`} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-5% 0px" }}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.08em]">
        <motion.span className="block" variants={lineVariants} custom={delay + i * 0.09}>
          {line}
        </motion.span>
      </span>
    ))}
  </motion.span>
);

// Paragraph that "reads itself": each word brightens as it scrolls through the viewport.
export const ScrollWords = ({ text, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>
      ))}
    </p>
  );
};

const Word = ({ progress, range, children }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return <motion.span style={{ opacity }} className="inline-block pr-[0.25em]">{children}</motion.span>;
};

// Gentle parallax for illustrations.
export const Parallax = ({ speed = 60, className = "", children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
};
