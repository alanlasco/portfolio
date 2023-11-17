import React from 'react'
import '../stylesheets/aboutme.css';
import '../stylesheets/welcome.css'
import { Tech } from './Tech';
import { useTranslation } from 'react-i18next';

export const Aboutme = () => {
      const { t } = useTranslation(["aboutme"]);
  return (
    <>
    <br />
    <span className='separador'></span>
    <br />
    <div id='sobremi' className='sobremi-container'>
              <p className='sobre_mi_titulo'><span className='flecha-2'>&gt;</span><span className='sobre'> {t("sobremititulo")}</span><span className='texto_resaltado_2'>{t("sobremiresaltado")}.</span></p> 
      <p className='sobre_mi_texto'>
        {t("sobremitexto")}       </p>
        <p className='sobre_mi_texto tecnologias-presentacion'>{t("sobremitecnologias")}</p> 
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
        <p className='sobre_mi_titulo_2'>{t("sobremititulodos")}<span className='texto_resaltado_2'> {t("sobremiresaltado")}</span>?</p>
              <p className='sobre_mi_texto fin'> {t("sobremitextodos")}  </p>
    </div> 
    </>
  )
}
