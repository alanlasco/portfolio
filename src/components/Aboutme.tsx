import React from 'react'
import '../stylesheets/aboutme.css';
import '../stylesheets/welcome.css'
import { Tech } from './Tech';

export const Aboutme = () => {
  return (
    <>
    <br />
    <span className='separador'></span>
    <br />
    <div id='sobremi' className='sobremi-container'>
              <p className='sobre_mi_titulo'><span className='flecha-2'>&gt;</span><span className='sobre'> Sobre </span><span className='texto_resaltado_2'>mi.</span></p> 
      <p className='sobre_mi_texto'>
        ¡Hola! Soy Alan; desarrollador Front End React. Aunque me considero un programador versátil, con gran adaptabilidad a diferentes tecnologías y areas del desarrollo        
       </p>
        <p className='sobre_mi_texto tecnologias-presentacion'>Estas son las tecnologías que he estado utilizando:</p> 
        <div className='tecnologias'>
         <Tech imgClass=""
               image="html-icon.png"
               name='HTML5' 
         />   
         <Tech imgClass=""
               image="css-iconn.png"
               name='CSS3' 
         />          
         <Tech imgClass=""
               image="bootstrap_icon.png"
               name='Bootstrap' 
         />
         <Tech imgClass=""
               image="JavaScript-logo.png"
               name='JavaScript' 
         />                     
         <Tech imgClass=" ts"
               image="ts-icon.png"
               name='TypeScript' 
         />         
         <Tech imgClass=""
               image="React-icon.png"
               name='React.js' 
         />         
         <Tech imgClass=""
               image="Jquery-icon.png"
               name='jQuery' 
         />

         <Tech imgClass=" php"
               image="Php-icon.png"
               name='PHP' 
         />
         <Tech imgClass=" sql"
               image="Mysql-icon.png"
               name='MySQL' 
         />
         <Tech imgClass=""
               image="Csharp-icon.png"
               name='C#' 
         />        
         <Tech imgClass=""
               image="dotnet-icon.png"
               name='.NET' 
         />
         <Tech imgClass=""
               image="Linux-icon.png"
               name='Linux/Bash' 
         />                                                  

        </div>
        <p className='sobre_mi_titulo_2'>¿Un poco más sobre <span className='texto_resaltado_2'>mí</span>?</p>
              <p className='sobre_mi_texto fin'> Mi incursión en el desarrollo web, se dió gracias a diversos cursos extracurriculares que realicé en la Facultad de Informática de La Plata, los cuales me incentivaron a seguir aprendiendo por mi cuenta.
 Soy aficionado a la poesía; Estudio antropología, la cual considero un factor importante para el análisis en la relación que tiene el ser humano con el mundo digital. Actualmente, me encuentro estudiando 6to año de inglés en un instituto. También reparo celulares y computadoras.  </p>
    </div> 
    </>
  )
}
