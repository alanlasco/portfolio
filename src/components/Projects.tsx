import React from "react";
import { Project } from "./Project";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation(["projects"]);
  return (
    <>
      <div className="contenedor-principal-projects">
        <p id="proyectos" className="proyectos">
          <span className="flecha-2">&gt;</span>
          <span className="sobre">{t("titulo")}</span>
        </p>
        <div className="allProjects">
          <Project
            nombre={t("proyectomenosdosnombre")}
            tecnologias="HTML5, CSS3, TypeScript, React"
            imagen="dotdager.png"
            descripcion={t("proyectomenosdosinfo")}
            desplegar="link-icon"
            github="https://github.com/alanlasco/dot-dagger"
            href="https://alanlasco.github.io/dot-dagger/"
            ocultar=""
          />
          <Project
            nombre={t("proyectomenostresnombre")}
            tecnologias="HTML5, CSS3, TypeScript"
            imagen="emwebtool.png"
            descripcion={t("proyectomenostresinfo")}
            desplegar="link-icon"
            github="https://github.com/alanlasco/imu-em-web-helper"
            href="https://alanlasco.github.io/imu-em-web-helper/"
            ocultar=""
          />
          <Project
            nombre={t("proyectomenosunonombre")}
            tecnologias="HTML5, CSS3, JavaScript"
            imagen="assassinscreed.png"
            descripcion={t("proyectomenosunoinfo")}
            desplegar="link-icon"
            github="https://github.com/alanlasco/proyecto-codo-a-codo"
            href="https://alanlasco.github.io/proyecto-codo-a-codo/"
            ocultar=""
          />
          <Project
            nombre={t("proyectoceronombre")}
            tecnologias="TypeScript, React, TailwindCSS"
            imagen="rickymorty.png"
            descripcion={t("proyectoceroinfo")}
            desplegar="link-icon"
            github="https://github.com/alanlasco/rick-and-morty"
            href="https://alanlasco.github.io/rick-and-morty/"
            ocultar=""
          />

          <Project
            nombre={t("proyectodosnombre")}
            tecnologias="HTML5, CSS3, Bootstrap4, jQuery"
            imagen="artist-img.jpeg"
            descripcion={t("proyectodosinfo")}
            desplegar="link-icon"
            github="https://github.com/alanlasco/web-for-artists"
            href="https://alanlasco.github.io/web-for-artists/"
            ocultar=""
          />
          <Project
            nombre={t("proyectotresnombre")}
            tecnologias="TypeScript, React, CSS3"
            imagen="alanpoetry-img.jpeg"
            descripcion={t("proyectotresinfo")}
            desplegar=""
            github="https://github.com/alanlasco/alan-poetry"
            href=""
            ocultar="ocultar"
          />
          <Project
            nombre={t("proyectocuatronombre")}
            tecnologias="HTML5, PHP, SQL"
            imagen="crud-img.jpeg"
            descripcion={t("proyectocuatroinfo")}
            desplegar=""
            github="https://github.com/alanlasco/crud-alan-poetry-php"
            href=""
            ocultar="ocultar"
          />
          <Project
            nombre={t("proyectounonombre")}
            tecnologias="TypeScript, React, CSS3"
            imagen="portfolio-img.jpeg"
            descripcion={t("proyectounoinfo")}
            desplegar=""
            github="https://github.com/alanlasco/portfolio"
            href=""
            ocultar="ocultar"
          />
        </div>
      </div>
    </>
  );
};
