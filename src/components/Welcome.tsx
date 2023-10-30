import React from 'react';
import { Link } from 'react-scroll'; // Importa el componente Link de react-scroll
import '../stylesheets/welcome.css';

export const Welcome = () => {
  return (
    <>
      <div id='inicio' className='welcome-container'>
        <div className='foto'>
          <div className='texto-container'>
            <p className='texto'>{'> '}¡Hola, Mundo!</p>
            <p className='nombre'>Alan X. Lasco.</p>
            <p className='cargo'>Desarrollador web.</p>
            <p className='frase'>
              Creando páginas web{' '}
              <span className='texto_resaltado'>atractivas</span> e{' '}
              <span className='texto_resaltado'>intuitivas</span> para el usuario.
            </p>
            {/* Utiliza Link para enlazar al elemento con el nombre "proyectos" */}
            <Link to="proyectos" smooth={true} duration={500} offset={-100}>
              <button className="button" data-text="Awesome">
                <span className="actual-text">&nbsp;Proyectos.&nbsp;</span>
                <span aria-hidden="true" className="hover-text">
                  &nbsp;Proyectos.&nbsp;
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
