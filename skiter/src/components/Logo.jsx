const INK = "#26292E";
const CORN = "#F7C325";
const WHEEL = "#E9B96E";

function CupI({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 62"
      aria-hidden="true"
      focusable="false"
    >
      <g fill={WHEEL} stroke={INK} strokeWidth="1.3">
        <circle cx="10" cy="9" r="4.4" />
        <circle cx="18" cy="6" r="4.6" />
        <circle cx="26" cy="9" r="4.4" />
      </g>
      <g fill={INK}>
        <circle cx="10" cy="9" r="1.5" />
        <circle cx="18" cy="6" r="1.5" />
        <circle cx="26" cy="9" r="1.5" />
      </g>
      <rect x="5" y="12" width="26" height="6" rx="2.5" fill="#fff" stroke={INK} strokeWidth="1.3" />
      <path d="M6.5 18 H29.5 L26.5 50 H9.5 Z" fill="#fff" stroke={INK} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M8.6 38 H27.4 L26.5 50 H9.5 Z" fill={CORN} stroke={INK} strokeWidth="1.3" strokeLinejoin="round" />
      <rect x="8.5" y="24" width="19" height="6.5" rx="2" fill={INK} />
      <path d="M14 50 V56 M22 50 V56" stroke={INK} strokeWidth="2.2" />
      <rect x="9.5" y="56" width="8" height="4" rx="1.6" fill={INK} />
      <rect x="18.5" y="56" width="8" height="4" rx="1.6" fill={INK} />
    </svg>
  );
}

export default function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Skiter, ir al inicio">
      <span aria-hidden="true">SKI</span>
      <CupI className="logo-i" />
      <span aria-hidden="true">TER</span>
    </a>
  );
}