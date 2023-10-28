import React from 'react';
import { Project } from './Project';

export const Projects = () => {
    return (
        <> 
        <div  className='contenedor-principal-projects'>
                <p id='proyectos' className='proyectos'><span className='flecha-2'>&gt;</span><span className='sobre'> Proyectos.</span></p> 

         <Project
            nombre="Portfolio"
            tecnologias="TypeScript, React, CSS3"
            imagen="portfolio-img.jpeg"
            descripcion="Primera versión de mi Portfolio personal."
            desplegar=""
            github="https://github.com/alanlasco/portfolio"
            href=""
            ocultar='ocultar'            
            />
         <Project
            nombre="Web Para Artístas"
            tecnologias="HTML5, CSS3, Bootstrap4, jQuery"
            imagen="artist-img.jpeg"
            descripcion="Página web diseñada para artistas; en este caso, tome elementos de la página oficial del artista y la realice desde 0 añadiendo nuevos estilos."
            desplegar='link-icon'
            github="https://github.com/alanlasco/web-for-artists"
            href="https://alanlasco.github.io/web-for-artists/"
            ocultar=""           
           />
         <Project
            nombre="ALAN Poetry"
            tecnologias="TypeScript, React, CSS3"
            imagen="alanpoetry-img.jpeg"
            descripcion="Proyecto personal de lectura de poemas, las cuales se obtienen mediante una API utilizando axios."
            desplegar=''
            github="https://github.com/alanlasco/alan-poetry"
            href=""
            ocultar='ocultar'
            />
         <Project
            nombre="CRUD y API; PHP"
            tecnologias="HTML5, PHP, SQL"
            imagen="crud-img.jpeg"
            descripcion="API y CRUD para el control personal de la base de datos del proyecto ‘ALAN Poetry’ sin estilos elaborados."
            desplegar=''
            github='https://github.com/alanlasco/crud-alan-poetry-php'
            href=''          
            ocultar='ocultar'              
            />                                                                                                             
        </div>
        </>
    );
};
