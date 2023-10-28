import React from 'react'
import '../stylesheets/aboutme.css';
import '../stylesheets/welcome.css'

export const Aboutme = () => {
  return (
    <>
    <br />
    <span className='separador'></span>
    <br />
    <div id='sobremi' className='sobremi-container'>
              <p className='sobre_mi_titulo'><span className='flecha-2'>&gt;</span><span className='sobre'> Sobre </span><span className='texto_resaltado_2'>mi.</span></p> 
      <p className='sobre_mi_texto'>
        ¡Hola! Soy Alan; desarrollador Front End React. Aunque me considero un programador versátil, gracias a las bases sólidas que me dio estudiar en la Facultad de Informática de La Plata, tanto en lenguajes de bajo nivel, como de alto nivel; lo cual me brinda otra perspectiva y la posibilidad de abarcar distintas tecnologías y áreas del mundo I.T.

         Mi incursión en el desarrollo web, se dio gracias a diversos cursos extracurriculares que realizó la misma facultad, los cuales me incentivaron a seguir aprendiendo por mi cuenta.
        
       </p>
        <p className='sobre_mi_texto tecnologias-presentacion'>Estas son las tecnologías que he manejado:</p> 
        <div className='tecnologias'>
        <div className='icon-container'>
            <img className='icon' src={require('../icons/html-icon.png')} alt="" />
            <p className='icon-name'>HTML5</p>
        </div>
        <div className='icon-container'>
            <img className='icon' src={require('../icons/css-iconn.png')} alt="" />
            <p className='icon-name'>CSS3</p>
        </div>
            <div className='icon-container'>
            <img className='icon bootstrap' src={require('../icons/bootstrap_icon.png')} alt="" />
            <p className='icon-name'>Bootstrap</p>
        </div>         
        <div className='icon-container'>
            <img className='icon' src={require('../icons/JavaScript-logo.png')} alt="" />
            <p className='icon-name'>JavaScript</p>
        </div>
        <div className='icon-container'>
            <img className='icon ts' src={require('../icons/ts-icon.png')} alt="" />
            <p className='icon-name'>TypeScript</p>
        </div>
        <div className='icon-container'>
            <img className='icon' src={require('../icons/React-icon.png')} alt="" />
            <p className='icon-name'>React.js</p>
        </div>

        <div className='icon-container'>
            <img className='icon' src={require('../icons/Jquery-icon.png')} alt="" />
            <p className='icon-name'>jQuery</p>
        </div> 
        <div className='icon-container'>
            <img className='icon php' src={require('../icons/Php-icon.png')} alt="" />
            <p className='icon-name'>PHP</p>
        </div>
        <div className='icon-container'>
            <img className='icon sql' src={require('../icons/Mysql-icon.png')} alt="" />
            <p className='icon-name'>MySQL</p>
        </div>        
        <div className='icon-container'>
            <img className='icon' src={require('../icons/Csharp-icon.png')} alt="" />
            <p className='icon-name'>C#</p>
        </div>
        <div className='icon-container'>
            <img className='icon' src={require('../icons/dotnet-icon.png')} alt="" />
            <p className='icon-name'>.NET</p>
        </div>
        <div className='icon-container'>
            <img className='icon' src={require('../icons/Linux-icon.png')} alt="" />
            <p className='icon-name'>Linux/Bash</p>
        </div>                                                     

        </div>
        <p className='sobre_mi_titulo_2'>¿Un poco más sobre <span className='texto_resaltado_2'>mí</span>?</p>
        <p className='sobre_mi_texto fin'>Soy aficionado a la poesía; Estudio antropología, la cual resulta un factor importante para el análisis en la relación que tiene el ser humano con el mundo digital. 
      </p>
    </div> 
    </>
  )
}
