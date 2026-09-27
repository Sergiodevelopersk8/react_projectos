import { useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import CategoryPage from "./components/CategoryPage.jsx";
import { PRODUCTS } from "./data/products.js";
import { CATEGORIES } from "./data/categories.js";
import { STEPS } from "./data/steps.js";
import { SITE_CONTENT } from "./data/siteContent.js";
import { GENERAL_URL, normalize } from "./utils/whatsapp.js";

function CatalogRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const categoryFromPath = pathname.replace("/", "") || "todo";
  const [query, setQuery] = useState("");

  const validCategory =
    categoryFromPath === "todo" || CATEGORIES.some((item) => item.id === categoryFromPath);

  const category = validCategory ? categoryFromPath : "todo";

  const visible = useMemo(() => {
    const q = normalize(query.trim());
    return PRODUCTS.filter((product) => {
      const inCategory = category === "todo" || product.category === category;
      const inSearch = !q || normalize(`${product.name} ${product.description}`).includes(q);
      return inCategory && inSearch;
    });
  }, [category, query]);

  const setCategoryPage = (nextCategory) => {
    const route = nextCategory === "todo" ? "/catalogo" : `/${nextCategory}`;
    navigate(route);
  };

  const resetFilters = () => {
    setQuery("");
    navigate("/catalogo");
  };

  return (
    <>
      <SiteHeader generalUrl={GENERAL_URL} />

      <main>
        <HeroSection generalUrl={GENERAL_URL} content={SITE_CONTENT.hero} />
        <HowItWorks steps={STEPS} />

        <CategoryPage
          products={visible}
          category={category}
          setCategory={setCategoryPage}
          query={query}
          setQuery={setQuery}
          resetFilters={resetFilters}
        />
      </main>

      <SiteFooter generalUrl={GENERAL_URL} message={SITE_CONTENT.footer.text} />
    </>
  );
}

export default function App() {
  return (
    <div className="skiter" id="inicio">
      <Routes>
        <Route path="/" element={<Navigate to="/catalogo" replace />} />
        <Route path="/catalogo" element={<CatalogRoutes />} />
        <Route path="/tablas" element={<CatalogRoutes />} />
        <Route path="/ruedas" element={<CatalogRoutes />} />
        <Route path="/trucks" element={<CatalogRoutes />} />
        <Route path="/ropa" element={<CatalogRoutes />} />
        <Route path="/accesorios" element={<CatalogRoutes />} />
      </Routes>
    </div>
  );
}

