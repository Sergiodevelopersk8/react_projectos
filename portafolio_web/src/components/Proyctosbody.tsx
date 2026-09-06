import { useEffect } from "react"
import ScrollReveal from 'scrollreveal';


export default function ProyectosSection() {

    useEffect(() => {

        const scroll = ScrollReveal({

            reset:true,
            distance: '20px',
            duration:800

        });


  /*********scroll************/
  
  
  ScrollReveal({ reset: true });
  ScrollReveal().reveal('.portafolio',{delay:250});
  ScrollReveal().reveal('.card1',{delay:500});
  ScrollReveal().reveal('.card2',{delay:600});
  ScrollReveal().reveal('.card3',{delay:700});
  ScrollReveal().reveal('.lenguajes',{delay:200});
  ScrollReveal().reveal('.footer',{delay:500});

return () => {
    scroll.destroy();
  };


    },[])


    return(
        <>
<section className="portafolio" id="portafolio">
<div className="portafolio__container container">
    <h2 className="portafolio__title"> Proyectos </h2>
    <div className="portafolio__cards">

<article className="portafolio__card card1">
    <img src="img/clima.PNG" className="portafolio__picture"></img>
<div className="portafolio__texts">
    <h3 className="portafolio__title"></h3>
    <p className="portafolio__paragraph">Esta aplicación te permite conocer el clima actual en cualquier ciudad del mundo. Solo necesitas ingresar el nombre de la ciudad y el país, y recibirás información como la temperatura actual, la temperatura máxima y mínima del día.
    </p>
    <a href="src/projectos/Clima/index.html" className="portafolio__cta">Ver Proyecto</a>
</div>

</article>

<article className="portafolio__card card2">
    <img src="img/criptomoneda.PNG" className="portafolio__picture"></img>
<div className="portafolio__texts">
    <h3 className="portafolio__title"></h3>
    <p className="portafolio__paragraph">Esta aplicación web permite consultar en tiempo real el valor de las principales criptomonedas
             con respecto a distintas monedas. 
             El usuario puede seleccionar la criptomoneda y la moneda de referencia, y con solo un clic obtener el
              precio.
    </p>
    <a href="https://sergiomerinocortezdev.github.io/src/projectos/criptomonedas/index.html" className="portafolio__cta">Ver Proyecto</a>
</div>

</article>

<article className="portafolio__card card3">
    <img src="img/envios email.PNG" className="portafolio__picture"></img>
<div className="portafolio__texts">
    <h3 className="portafolio__title"></h3>
    <p className="portafolio__paragraph">Este formulario te permite enviar un mensaje de forma rápida y segura.
             Solo necesitas completar los campos de correo electrónico, asunto y mensaje.
            La información se valida automáticamente para asegurarnos de que todo esté correcto antes de enviarlo.
    </p>
    <a href="/src/projectos/EnviarEmail/index.html" className="portafolio__cta">Ver Proyecto</a>
</div>

</article>

</div>
<div className="mas">

    <div className="vermasprojectos">
        <a href="../projectos.html" className="verprojectos">
            Ver mas projectos
        </a>
    </div>
</div>
    
   
</div>
    </section>
        </>
    )



}