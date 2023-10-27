import React from 'react';
import { Project } from './Project';

export const Projects = () => {
    return (
        <> 
        <div className='contenedor-principal-projects'>
                <p className='proyectos'><span className='flecha-2'>&gt;</span><span className='sobre'> Proyectos.</span></p> 

         <Project
            nombre="Portfolio"
            tecnologias="TypeScript, React, CSS3"
            imagen="portfolio-img.jpeg"
            descripcion="Primera versión de mi Portfolio personal."
            />
         <Project
            nombre="Web Para Artístas"
            tecnologias="HTML5, CSS3, Bootstrap4, jQuery"
            imagen="artist-img.jpeg"
            descripcion="Página web diseñada para artistas; en este caso, tome elementos de la página oficial del artista y la realice desde 0 añadiendo nuevos estilos."
            />
         <Project
            nombre="ALAN Poetry"
            tecnologias="TypeScript, React, CSS3"
            imagen="alanpoetry-img.jpeg"
            descripcion="Proyecto personal de lectura de poemas, las cuales se obtienen mediante una API utilizando axios."
            />
         <Project
            nombre="CRUD y API; PHP"
            tecnologias="HTML5, PHP, SQL"
            imagen="crud-img.jpeg"
             descripcion="API y CRUD para la manipulación de la base de datos del proyecto ‘ALAN Poetry’No posee estilos elaborados, solamente es para control personal."
            />                                                                                                             
        </div>
        </>
    );
};
