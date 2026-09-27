import { useState } from "react";

const INK = "#26292E";
const CORN = "#F7C325";
const WHEEL = "#E9B96E";

function CupI({ board = false, className, title }) {
  const height = board ? 72 : 62;

  return (
    <svg
      className={className}
      viewBox={`0 0 36 ${height}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
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
      {board && (
        <>
          <rect x="2" y="60.5" width="32" height="3.6" rx="1.8" fill={CORN} stroke={INK} strokeWidth="1.2" />
          <circle cx="9" cy="67.5" r="3" fill={WHEEL} stroke={INK} strokeWidth="1.2" />
          <circle cx="27" cy="67.5" r="3" fill={WHEEL} stroke={INK} strokeWidth="1.2" />
        </>
      )}
    </svg>
  );
}

export default function Mascot() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="hero-art">
      {failed ? (
        <CupI board className="mascot-fallback" title="Mascota de Skiter sobre una patineta" />
      ) : (
        <img
          className="mascot-img"
          src="/mascota.png"
          alt="Mascota de Skiter: un vaso con lentes, chamarra de elote y ruedas en la tapa, sobre una patineta"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

