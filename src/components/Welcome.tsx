import React from 'react'
import '../stylesheets/welcome.css';

export const Welcome = () => {
  return (
    <>
    <div className='welcome-container'>
        <div className='foto'>
          <div className='texto-container'>
          <span className='texto'>{'> '}¡Hola, Mundo!</span>
            {/* boton */}
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Proyectos</span>
            </button> 


          </div>


        </div>
    </div>    

    </>
  )
}
