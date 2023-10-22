import React from 'react'
import '../stylesheets/welcome.css';

export const Welcome = () => {
  return (
    <>
    <div className='welcome-container'>
        <div className='foto'>
          <div className='texto-container'>
          <p className='texto'>{'> '}¡Hola, Mundo!</p>
          <p className='nombre'>Soy Alan Lasco.</p>
          <p className='cargo'>Desarrollador web.</p>
            {/* boton */}
            {/* <button className="learn-more"> *
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Proyectos</span>
             </button>  */}
            <p className='frase'>Front End developer; creando páginas web <span className='texto_resaltado'>atractivas</span> e <span className='texto_resaltado'>intuitivas</span> para el usuario.</p>
            <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;Proyectos.&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;Proyectos.&nbsp;</span>
            </button>

          </div>


        </div>
    </div>    

    </>
  )
}
