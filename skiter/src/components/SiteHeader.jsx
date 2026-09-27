import Logo from "./Logo.jsx";

export default function SiteHeader({ generalUrl }) {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Logo />
        <a className="btn btn-corn" href={generalUrl} target="_blank" rel="noopener noreferrer">
          Escríbenos
        </a>
      </div>
    </header>
  );
}
