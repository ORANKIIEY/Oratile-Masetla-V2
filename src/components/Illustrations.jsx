// Flat "sticker" illustrations: solid fills from the palette, plum outlines, transparent backgrounds.
// Colours come from CSS variables so they follow light and dark themes.
const S = { stroke: "var(--ink)", strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" };

export const Sparkle = ({ className = "", fill = "var(--butter)" }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <path d="M20 3c1.6 8.6 7.4 14.4 16 16-8.6 1.6-14.4 7.4-16 16-1.6-8.6-7.4-14.4-16-16 8.6-1.6 14.4-7.4 16-16Z" fill={fill} {...S} />
  </svg>
);

export const Heart = ({ className = "", fill = "var(--pink)" }) => (
  <svg viewBox="0 0 40 36" className={className} aria-hidden="true">
    <path d="M20 33S3 22.5 3 11.5C3 6.3 7 3 11.3 3c3.6 0 6.6 2.1 8.7 5.4C22.1 5.1 25.1 3 28.7 3 33 3 37 6.3 37 11.5 37 22.5 20 33 20 33Z" fill={fill} {...S} />
  </svg>
);

export const Squiggle = ({ className = "" }) => (
  <svg viewBox="0 0 120 30" className={className} aria-hidden="true" fill="none">
    <path d="M4 18c10-14 20-14 28 0s18 14 28 0 20-14 28 0 18 10 28-4" stroke="var(--pink)" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const CurlyArrow = ({ className = "" }) => (
  <svg viewBox="0 0 120 90" className={className} aria-hidden="true" fill="none">
    <path d="M8 12c30-8 58 4 52 26-4 15-24 12-20-2 5-17 40-14 56 22 4 9 6 16 7 22" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
    <path d="m92 70 11 12 6-15" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CodeTag = ({ className = "" }) => (
  <svg viewBox="0 0 90 60" className={className} aria-hidden="true">
    <rect x="3" y="3" width="84" height="54" rx="16" fill="var(--lilac)" {...S} />
    <path d="m30 20-11 10 11 10M60 20l11 10-11 10M50 16 40 44" fill="none" {...S} />
  </svg>
);

/* About: laptop with stickers, a coffee and a little plant. */
export const DeskIllo = ({ className = "" }) => (
  <svg viewBox="0 0 360 260" className={className} role="img" aria-label="Illustration of a laptop, coffee and a plant">
    <ellipse cx="185" cy="236" rx="160" ry="14" fill="var(--surface2)" />
    <rect x="70" y="48" width="200" height="132" rx="14" fill="var(--surface)" {...S} />
    <rect x="86" y="64" width="168" height="100" rx="8" fill="var(--ink)" />
    <path d="M102 86h52M102 100h80M102 114h36M146 114h44M102 128h64" stroke="var(--pink)" strokeWidth="5" strokeLinecap="round" />
    <path d="M102 86h52" stroke="var(--butter)" strokeWidth="5" strokeLinecap="round" />
    <path d="m196 136 10 8-10 8" fill="none" stroke="var(--mint)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 180h252l-14 34H58Z" fill="var(--pink)" {...S} />
    <path d="M150 196h40" {...S} />
    <circle cx="246" cy="40" r="16" fill="var(--butter)" {...S} />
    <path d="M240 40h12M246 34v12" {...S} />
    <g transform="translate(294 150)">
      <path d="M0 10h40l-5 44H5Z" fill="var(--lilac)" {...S} />
      <path d="M40 20c12 0 12 20 0 20" fill="none" {...S} />
      <path d="M12 0c-4-8 4-10 0-18M24 0c-4-8 4-10 0-18" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
    </g>
    <g transform="translate(14 120)">
      <path d="M10 60h40l-6 40H16Z" fill="var(--butter)" {...S} />
      <path d="M30 60c-2-22-14-30-24-34 10 16 16 22 24 34ZM30 60c2-26 14-36 28-40-8 18-16 26-28 40Z" fill="var(--mint)" {...S} />
    </g>
  </svg>
);

/* Work: two browser windows and a phone. */
export const ScreensIllo = ({ className = "" }) => (
  <svg viewBox="0 0 360 240" className={className} role="img" aria-label="Illustration of app screens">
    <rect x="18" y="22" width="220" height="150" rx="16" fill="var(--surface)" {...S} />
    <path d="M18 54h220" {...S} />
    <circle cx="40" cy="38" r="5" fill="var(--pink)" /><circle cx="58" cy="38" r="5" fill="var(--butter)" /><circle cx="76" cy="38" r="5" fill="var(--mint)" />
    <rect x="38" y="72" width="80" height="80" rx="12" fill="var(--pink)" {...S} />
    <path d="M136 80h80M136 100h60M136 120h76M136 140h40" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" opacity=".35" />
    <rect x="150" y="96" width="150" height="110" rx="16" fill="var(--lilac)" {...S} />
    <path d="M168 170 196 140l22 20 26-34 38 44" fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="276" y="28" width="66" height="120" rx="16" fill="var(--butter)" {...S} />
    <rect x="288" y="46" width="42" height="64" rx="8" fill="var(--canvas, var(--bg))" {...S} />
    <path d="M303 124h12" {...S} />
    <path d="m306 70 6 6 10-12" fill="none" stroke="var(--pink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Hackathons: trophy, stopwatch and a lightning bolt. */
export const TrophyIllo = ({ className = "" }) => (
  <svg viewBox="0 0 320 260" className={className} role="img" aria-label="Illustration of a trophy and a stopwatch">
    <ellipse cx="160" cy="238" rx="130" ry="12" fill="var(--surface2)" />
    <path d="M102 40h116v40c0 34-26 58-58 58s-58-24-58-58Z" fill="var(--butter)" {...S} />
    <path d="M102 54H76c0 30 14 44 32 46M218 54h26c0 30-14 44-32 46" fill="none" {...S} />
    <path d="M148 138h24v34h-24Z" fill="var(--butter)" {...S} />
    <rect x="112" y="172" width="96" height="46" rx="10" fill="var(--pink)" {...S} />
    <path d="M140 196h40" stroke="var(--canvas, var(--bg))" strokeWidth="4" strokeLinecap="round" />
    <path d="m160 64 7 14 15 2-11 10 3 15-14-8-14 8 3-15-11-10 15-2Z" fill="var(--pink)" {...S} />
    <g transform="translate(232 130)">
      <circle cx="32" cy="42" r="30" fill="var(--mint)" {...S} />
      <path d="M32 6v6M24 4h16M32 42V26M32 42l12 8" fill="none" {...S} />
    </g>
    <path d="m44 120 22-36-4 26 18-2-24 40 6-30Z" fill="var(--lilac)" {...S} />
  </svg>
);

/* Journey: a winding path from a school flag to a graduation cap. */
export const PathIllo = ({ className = "" }) => (
  <svg viewBox="0 0 340 260" className={className} role="img" aria-label="Illustration of a winding path to a graduation cap">
    <path d="M30 230c60 0 90-30 70-60s10-60 70-50 90-30 70-70" fill="none" stroke="var(--surface2)" strokeWidth="22" strokeLinecap="round" />
    <path d="M30 230c60 0 90-30 70-60s10-60 70-50 90-30 70-70" fill="none" stroke="var(--ink)" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" />
    <g transform="translate(14 150)">
      <path d="M12 76V6" {...S} fill="none" />
      <path d="M12 6h44l-10 14 10 14H12Z" fill="var(--pink)" {...S} />
    </g>
    <circle cx="100" cy="170" r="10" fill="var(--butter)" {...S} />
    <circle cx="170" cy="120" r="10" fill="var(--mint)" {...S} />
    <g transform="translate(206 8)">
      <path d="M4 34 58 12l54 22-54 22Z" fill="var(--lilac)" {...S} />
      <path d="M26 44v22c0 8 64 8 64 0V44" fill="var(--lilac)" {...S} />
      <path d="M100 38v26" {...S} fill="none" />
      <circle cx="100" cy="68" r="5" fill="var(--pink)" {...S} />
    </g>
  </svg>
);

/* Credentials: a certificate with a rosette. */
export const CertificateIllo = ({ className = "" }) => (
  <svg viewBox="0 0 320 240" className={className} role="img" aria-label="Illustration of a certificate with a ribbon">
    <rect x="30" y="30" width="230" height="160" rx="14" fill="var(--surface)" {...S} />
    <rect x="46" y="46" width="198" height="128" rx="8" fill="none" stroke="var(--pink)" strokeWidth="3" strokeDasharray="6 6" />
    <path d="M80 82h130M96 104h98M110 126h70" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" opacity=".35" />
    <g transform="translate(212 140)">
      <path d="M14 40 4 82l22-12 14 18 4-46ZM58 40l10 42-22-12-14 18-4-46Z" fill="var(--pink)" {...S} />
      <circle cx="36" cy="34" r="30" fill="var(--butter)" {...S} />
      <circle cx="36" cy="34" r="16" fill="none" {...S} />
    </g>
  </svg>
);

/* Contact: a paper plane trailing a loop, and an envelope with a heart. */
export const PlaneIllo = ({ className = "" }) => (
  <svg viewBox="0 0 340 240" className={className} role="img" aria-label="Illustration of a paper plane and a letter">
    <path d="M30 200c40-10 50-50 20-60s-30 40 20 40 120-50 150-90" fill="none" stroke="var(--ink)" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
    <path d="m220 70 100-50-40 120-24-38Z" fill="var(--lilac)" {...S} />
    <path d="m256 102 64-82-88 74Z" fill="var(--surface)" {...S} />
    <g transform="translate(120 140)">
      <rect x="0" y="0" width="120" height="80" rx="10" fill="var(--butter)" {...S} />
      <path d="m4 6 56 40 56-40" fill="none" {...S} />
      <path d="M60 40s-14-9-14-17c0-4 3-7 7-7 3 0 5 2 7 4 2-2 4-4 7-4 4 0 7 3 7 7 0 8-14 17-14 17Z" fill="var(--pink)" {...S} />
    </g>
  </svg>
);
