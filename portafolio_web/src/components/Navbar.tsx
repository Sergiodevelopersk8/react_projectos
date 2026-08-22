import logosmc from '../../public/img/logosmc.png'
import mifoto from '../../public/img/mifoto.png'
import { useEffect,useState } from "react"

export default function Navbar() {

const[isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () =>{
  setIsMenuOpen(!isMenuOpen)
};


const closeMenu = () => {
    setIsMenuOpen(false);
  };






  return (
  <>
  
<head>
<meta />

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="src/output.css" rel="stylesheet"/>
    <link href="css/estilo.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/tailwind.min.css"/>
     <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<link rel="icon" href="img/logosmc.png" sizes="100"/>
<script src="https://unpkg.com/scrollreveal"></script>
    <title>Sergo Merino C.💻</title>
  
</head>
  
   <header className="hero">
        <nav className="nav">
            <section className="nav__container container">
                <figure className="nav__logo">
                    
                    <img src={logosmc} alt="" className="img__menu"></img>
                </figure>
  {/* Botón hamburguesa */}
    <div className="nav__toggle" id="nav-toggle">
     

    </div>
       <ul className="nav__links" id="nav-menu">
      <li className="nav_link"><a href="#portafolio" className="navs_links">Projectos</a></li>
      <li className="nav_link"><a href="src/Certificados/index.html" className="navs_links">Certificados</a></li>
      <li className="nav_link"><a href="#tecnologias" className="navs_links">Tecnologias</a></li>
      <li className="nav_link"><a href="#contacto" className="navs_links">Contactos</a></li>
    </ul>



            </section>
        </nav>

        <section className="hero_main container">
            <div className="hero_texts">
                <h1 className="hero_title"> Sergio Merino Cortez</h1>
                <p className="hero_paragraph">Desarrollo y Soporte Tecnico</p>
                <a href="CV/SergioMERINO.pdf" download className="cta button hero_button_cv"><p className="texto__cv">Descargar cv</p></a>
               
            </div>
            
            <figure className="hero_picture">
               
                <img src={mifoto} alt="" className="hero__img"></img>
            
            </figure>
        </section>
    </header>
  
  </>
    
  )
}
