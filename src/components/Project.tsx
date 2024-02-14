import React from "react";
import "../stylesheets/projects.css";
import { reqProject } from "./types/reqProject";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export const Project = (props: reqProject) => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img
          className="image"
          src={require("../images/" + props.imagen)}
          alt={props.nombre}
        />
      </div>
      <div className="texto-imagen-container">
        <p className="nombre-proyecto">{props.nombre}</p>
        <p className="tecnologias-proyecto">{props.tecnologias}</p>
        <p className="descripcion-proyecto">{props.descripcion}</p>
        <p className="github-link">
          <a href={props.github} target="_blank">
            <FaGithub size={"3rem"} />
          </a>
        </p>
        <p className={props.desplegar}>
          <a className={props.ocultar} href={props.href} target="_blank">
            <FaExternalLinkAlt size={"3rem"} />
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
