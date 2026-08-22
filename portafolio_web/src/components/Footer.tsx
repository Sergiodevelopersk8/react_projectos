
export default function Footer() {
  return (
    <>
    
    <footer className="footer" id="contacto">
    <div className="footer__container container">
        <div className="footer__texts">
            <h2 className="title">Contacto</h2>

            <div className="footer__icons">
                <a href="https://wa.me/2212568226" target="_blank" className="footer__icon "><img src="src/icons/whatsapp_logo.gif" alt=""></img></a>
                <a href="https://outlook.live.com/mail/0/deeplink/compose?to=merino27dev@hotmail.com&subject=Consulta&body=Hola" target="_blank" className="footer__icon"><img src="src/icons/mail.gif" alt=""></img></a>
                <a href="https://mx.linkedin.com/in/sergio-merino-cortez-0958631b6" target="_blank" className="footer__icon"><img src="src/icons/wired-flat-2632-logo-circle-linkedin-hover-pinch.gif" alt=""></img></a>
            </div>
            
            <nav className="footer__nav">
                <a href="#" className="footer__link">Inicio</a>
                <a href="#" className="footer__link">Sobre mi</a>
                <a href="#portafolio" className="footer__link">Portafolio</a>
            </nav>

            <p className="footer__copy">Derechos reservados &copy; Sergio Merino </p>
        </div>

        <figure className="footer__img">
            <img src="img/mail.svg" className="footer__picture"/>
        </figure>
    </div>
</footer>
    
    
    
    
    
    
    </>
  )
}
