// Silueta mascotei ArtDent, folosită ca element decorativ de fundal în hero-uri
// (aceeași tehnică ca ToothMotif: fill="currentColor" + clasa .tooth-motif din globals.css,
// pentru a moșteni culoarea și opacitatea joasă din contextul în care e plasată).
export function MascotMotif({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      className="tooth-motif"
      width="220"
      height="275"
      viewBox="0 0 320 400"
      fill="currentColor"
      stroke="currentColor"
      style={style}
      aria-hidden="true"
    >
      <path d="M66,142 C42,156 28,192 34,232" fill="none" strokeWidth="30" strokeLinecap="round" />
      <circle cx="32" cy="238" r="20" strokeWidth="4" />
      <path d="M254,142 C278,156 292,192 286,232" fill="none" strokeWidth="30" strokeLinecap="round" />
      <circle cx="288" cy="238" r="20" strokeWidth="4" />
      <path d="M160,70 C118,38 66,44 50,84 C36,120 50,154 76,172 L74,270 C72,304 82,331 112,342 C120,345 128,339 128,335 L128,291 C128,270 136,250 148,240 C156,233 164,233 172,240 C184,250 192,270 192,291 L192,335 C192,339 200,345 208,342 C238,331 248,304 246,270 L244,172 C270,154 284,120 270,84 C254,44 202,38 160,70 Z" strokeWidth="4" strokeLinejoin="round" />
      <g transform="translate(78 68) rotate(-6)">
        <path d="M6,8 L14,34 L2,28 Z" strokeWidth="3" strokeLinejoin="round" />
        <path d="M-6,8 L-14,34 L-2,28 Z" strokeWidth="3" strokeLinejoin="round" />
        <path d="M0,0 C-10,-22 -34,-26 -46,-10 C-54,2 -46,16 -28,14 C-16,12 -6,4 0,0 Z" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M0,0 C10,-22 34,-26 46,-10 C54,2 46,16 28,14 C16,12 6,4 0,0 Z" strokeWidth="3.5" strokeLinejoin="round" />
        <circle cx="0" cy="2" r="10" strokeWidth="3.5" />
      </g>
      <circle cx="112" cy="150" r="30" strokeWidth="4" />
      <circle cx="112" cy="153" r="19" />
      <circle cx="208" cy="150" r="30" strokeWidth="4" />
      <circle cx="208" cy="153" r="19" />
      <path d="M138,194 C150,208 172,208 184,194 C176,202 146,202 138,194 Z" />
    </svg>
  );
}
