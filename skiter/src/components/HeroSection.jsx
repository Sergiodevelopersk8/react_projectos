import Mascot from "./Mascot.jsx";

export default function HeroSection({ generalUrl }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>Todo para rodar</h1>
          <p>
            Tablas, ruedas, trucks y ropa de skate. Elige lo que quieres y pídelo directo por
            WhatsApp, sin registrarte ni pagar en línea.
          </p>
          <div className="hero-actions">
            <a className="btn btn-dark" href="#catalogo">
              Ver productos
            </a>
            <a className="btn btn-outline" href={generalUrl} target="_blank" rel="noopener noreferrer">
              Hablar con la tienda
            </a>
          </div>
        </div>
        <Mascot />
      </div>
    </section>
  );
}
