import Logo from "./Logo.jsx";

export default function SiteFooter({ generalUrl, message }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <Logo />
        <p>{message}</p>
        <a className="btn btn-corn" href={generalUrl} target="_blank" rel="noopener noreferrer">
          Escríbenos por WhatsApp
        </a>
      </div>
    </footer>
  );
}
