import { CATEGORIES } from "../data/categories.js";

export default function CatalogFilters({ category, setCategory, query, setQuery, itemCount }) {
  return (
    <>
      <div className="toolbar">
        <div className="chips" role="group" aria-label="Filtrar por categoría">
          {CATEGORIES.map((categoryItem) => (
            <button
              key={categoryItem.id}
              type="button"
              className={`chip ${category === categoryItem.id ? "is-active" : ""}`}
              aria-pressed={category === categoryItem.id}
              onClick={() => setCategory(categoryItem.id)}
            >
              {categoryItem.label}
            </button>
          ))}
        </div>

        <div className="search">
          <label htmlFor="buscar" className="sr-only">
            Buscar producto
          </label>
          <input
            id="buscar"
            type="search"
            placeholder="Buscar producto"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      <p className="count" aria-live="polite">
        {itemCount} {itemCount === 1 ? "producto" : "productos"}
      </p>
    </>
  );
}

