import { useState } from "react";
import Glyph from "./Glyph.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { money } from "../utils/format.js";
import { buildProductUrl } from "../utils/whatsapp.js";

export default function ProductCard({ product }) {
  const [option, setOption] = useState(product.options?.[0] ?? "");
  const selectId = `opcion-${product.id}`;

  return (
    <article className="card">
      <div className="card-media">
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <Glyph category={product.category} />
        )}
      </div>

      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="card-desc">{product.description}</p>

        {product.options && (
          <div className="field">
            <label htmlFor={selectId}>{product.optionLabel}</label>
            <select id={selectId} value={option} onChange={(event) => setOption(event.target.value)}>
              {product.options.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        )}

        <p className="price">{money.format(product.price)}</p>

        <a
          className="btn btn-wa"
          href={buildProductUrl(product, option)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  );
}

