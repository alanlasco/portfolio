import React from 'react';
import '../stylesheets/projects.css';
import { reqProject } from './types/reqProject';

export const Project = (props: reqProject) => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img className="image" src={`/img/${props.imagen}`} alt={props.nombre} />
      </div>
      <div className="texto-imagen-container">
        <p className="nombre-proyecto">{props.nombre}</p>
        <p className="tecnologias-proyecto">{props.tecnologias}</p>
        <p className="descripcion-proyecto">{props.descripcion}</p>
        <span>icon</span>
        <span>icon2</span>
      </div>
    </div>
  );
};