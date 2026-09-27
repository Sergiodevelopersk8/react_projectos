import { useEffect, useMemo, useState } from "react";
import CatalogFilters from "./CatalogFilters.jsx";
import ProductCard from "./ProductCard.jsx";
import { CATEGORIES } from "../data/categories.js";

export default function CategoryPage({ products, category, setCategory, query, setQuery, resetFilters }) {
  const selectedCategory = CATEGORIES.find((item) => item.id === category) ?? CATEGORIES[0];

  const groups = useMemo(
    () =>
      category === "todo"
        ? CATEGORIES.filter((item) => item.id !== "todo").map((item) => ({
            ...item,
            items: products.filter((product) => product.category === item.id),
          }))
        : [
            {
              ...selectedCategory,
              items: products,
            },
          ],
    [category, products, selectedCategory],
  );

  const isEmpty = groups.every((group) => group.items.length === 0);
  const carouselSlides = useMemo(() => CATEGORIES.filter((entry) => entry.id !== "todo"), []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (carouselSlides.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % carouselSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [carouselSlides.length]);

  const goToSlide = (nextIndex) => {
    setActiveIndex((nextIndex + carouselSlides.length) % carouselSlides.length);
  };

  const currentSlide = carouselSlides[activeIndex] ?? carouselSlides[0];

  return (
    <section className="catalog" id="catalogo" aria-labelledby="titulo-catalogo">
      <div className="wrap">
        <div className="category-header">
          <h2 id="titulo-catalogo">{selectedCategory.title}</h2>
          <p>{selectedCategory.description}</p>
        </div>

        <div className="promo-carousel" aria-label="Promociones de categorías">
          {carouselSlides.length > 1 && (
            <>
              <button
                type="button"
                className="promo-arrow promo-arrow-left"
                onClick={() => goToSlide(activeIndex - 1)}
                aria-label="Anterior promoción"
              >
                ‹
              </button>
              <button
                type="button"
                className="promo-arrow promo-arrow-right"
                onClick={() => goToSlide(activeIndex + 1)}
                aria-label="Siguiente promoción"
              >
                ›
              </button>
            </>
          )}

          <div className="promo-stage">
            {currentSlide && (
              <article className="promo-slide">
                <span className="slide-badge">{currentSlide.promo.badge}</span>
                <h3>{currentSlide.banner.title}</h3>
                <p>{currentSlide.banner.text}</p>
                <div className="promo-meta">
                  <span>{currentSlide.banner.accent}</span>
                  <button type="button" className="btn btn-dark" onClick={() => setCategory(currentSlide.id)}>
                    Ver más
                  </button>
                </div>
              </article>
            )}
          </div>

          <div className="promo-dots" aria-label="Indicadores del carrusel">
            {carouselSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={index === activeIndex ? "promo-dot is-active" : "promo-dot"}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a la promoción ${slide.label}`}
              />
            ))}
          </div>
        </div>

        <CatalogFilters
          category={category}
          setCategory={setCategory}
          query={query}
          setQuery={setQuery}
          itemCount={products.length}
        />

        {isEmpty ? (
          <div className="empty">
            <p>No encontramos productos con esa búsqueda. Prueba con otra palabra o elige otra categoría.</p>
            <button type="button" className="btn btn-dark" onClick={resetFilters}>
              Ver todo el catálogo
            </button>
          </div>
        ) : (
          <div id="productos">
            {groups.map((group) => (
              <div key={group.id} className="category-page">
                {group.items.length > 0 && <h3>{group.label}</h3>}
                {group.items.length > 0 && (
                  <div className="grid">
                    {group.items.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
