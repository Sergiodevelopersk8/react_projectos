import logosmc from '../../public/img/logosmc.png'
import mifoto from '../../public/img/mifoto.png'
import {useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Solo alteras el estado, React se encarga de cambiar las clases en el JSX
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <header className="hero">
      <nav className="nav">
        <section className="nav__container container">
          <figure className="nav__logo">
            <img src={logosmc} alt="Logo SMC" className="img__menu" />
          </figure>

          {/* Botón hamburguesa */}
          <div 
            className={`nav__toggle ${isMenuOpen ? 'active close_menu' : 'menu_icon'}`} 
            onClick={handleMenuToggle} 
            id="nav-toggle" 
          >
          </div>

          {/* Lista de enlaces */}
          <ul className={`nav__links ${isMenuOpen ? 'show show_menu' : ''}`} id="nav-menu">
            <li className="nav_link">
              <a href="#portafolio" className="navs_links" onClick={handleCloseMenu}>Proyectos</a>
            </li>
            <li className="nav_link">
              <a href="src/Certificados/index.html" className="navs_links" onClick={handleCloseMenu}>Certificados</a>
            </li>
            <li className="nav_link">
              <a href="#tecnologias" className="navs_links" onClick={handleCloseMenu}>Tecnologías</a>
            </li>
            <li className="nav_link">
              <a href="#contacto" className="navs_links" onClick={handleCloseMenu}>Contactos</a>
            </li>
          </ul>
        </section>
      </nav>

      <section className="hero_main container">
        <div className="hero_texts">
          <h1 className="hero_title">Sergio Merino Cortez</h1>
          <p className="hero_paragraph">Desarrollo y Soporte Técnico</p>
          <a href="/CV/SergioMERINO.pdf" download className="cta button hero_button_cv">
            <p className="texto__cv">Descargar CV</p>
          </a>
        </div>
        
        <figure className="hero_picture">
          <img src={mifoto} alt="Sergio Merino" className="hero__img" />
        </figure>
      </section>
    </header>
  
  </>
    
  )
}
