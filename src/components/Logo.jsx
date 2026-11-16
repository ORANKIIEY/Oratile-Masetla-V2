// Wordmark: a JSX-style self-closing tag. Techy, short, no AI sparkle.
const Logo = ({ className = "" }) => (
  <span className={`inline-flex items-baseline font-sans text-[22px] font-extrabold tracking-tight ${className}`}>
    <span className="text-pink">&lt;</span>
    <span>ora</span>
    <span className="text-pink">/&gt;</span>
  </span>
);

export default Logo;
