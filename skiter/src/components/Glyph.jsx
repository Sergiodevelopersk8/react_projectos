const INK = "#26292E";
const CORN = "#F7C325";
const WHEEL = "#E9B96E";

export default function Glyph({ category }) {
  const stroke = { stroke: INK, strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" };

  return (
    <svg className="glyph" viewBox="0 0 120 120" aria-hidden="true">
      {category === "tablas" && (
        <g transform="rotate(-24 60 60)">
          <rect x="44" y="6" width="32" height="108" rx="16" fill={CORN} {...stroke} />
          <circle cx="60" cy="26" r="2.5" fill={INK} />
          <circle cx="60" cy="94" r="2.5" fill={INK} />
        </g>
      )}

      {category === "ruedas" && (
        <g>
          <circle cx="60" cy="60" r="42" fill={WHEEL} {...stroke} />
          <circle cx="60" cy="60" r="17" fill="#fff" {...stroke} />
          <circle cx="60" cy="60" r="4" fill={INK} />
        </g>
      )}

      {category === "trucks" && (
        <g>
          <rect x="14" y="40" width="92" height="18" rx="8" fill="#B8BDC2" {...stroke} />
          <rect x="40" y="58" width="40" height="14" rx="3" fill="#fff" {...stroke} />
          <path d="M60 72 V96" {...stroke} />
          <circle cx="14" cy="49" r="7" fill={WHEEL} {...stroke} />
          <circle cx="106" cy="49" r="7" fill={WHEEL} {...stroke} />
        </g>
      )}

      {category === "ropa" && (
        <g>
          <path
            d="M40 20 L16 34 L27 54 L40 47 V100 H80 V47 L93 54 L104 34 L80 20 Q60 36 40 20 Z"
            fill="#fff"
            {...stroke}
          />
          <circle cx="60" cy="64" r="10" fill={CORN} {...stroke} />
        </g>
      )}

      {category === "accesorios" && (
        <g>
          <circle cx="60" cy="60" r="40" fill="#B8BDC2" {...stroke} />
          <circle cx="60" cy="60" r="24" fill="#fff" {...stroke} />
          <circle cx="60" cy="60" r="9" fill={INK} />
        </g>
      )}
    </svg>
  );
}

