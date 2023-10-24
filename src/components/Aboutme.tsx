import React from 'react'
import '../stylesheets/aboutme.css';
import '../stylesheets/welcome.css'

export const Aboutme = () => {
  return (
    <>
    <br />
    <span className='separador'></span>
    <br />
    <div className='sobremi-container'>
              <p className='sobre_mi_titulo'><span className='flecha-2'>&gt;</span><span className='sobre'> Sobre </span><span className='texto_resaltado_2'>mi.</span></p> 
      <p className='sobre_mi_texto'>
        ¡Hola! Soy Alan; desarrollador Front End React. Aunque me considero un programador versátil, gracias a las bases sólidas que me dio estudiar en la Facultad de Informática de La Plata, tanto en lenguajes de bajo nivel, como de alto nivel; lo cual me brinda otra perspectiva y la posibilidad de abarcar distintas tecnologías y áreas del mundo I.T.

         Mi incursión en el desarrollo web, se dio gracias a diversos cursos extracurriculares que realizó la misma facultad, los cuales me incentivaron a seguir aprendiendo por mi cuenta.

        Estas son las tecnologías que he manejado:
       </p> 
        <div className='tecnologias'>

        </div>


        <p className='sobre_mi_titulo_2'>¿Un poco más sobre <span className='texto_resaltado_2'>mí</span>?</p>
        <p className='sobre_mi_texto'>Soy aficionado a la poesía; Estudio antropología,la cual resulta un factor importante para el análisis en la relación que tiene el ser humano con el mundo digital. 

      </p>
    </div> 
    </>
  )
}
