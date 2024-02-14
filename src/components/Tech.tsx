import React from "react";
import { reqTech } from "./types/reqTech";
import "../stylesheets/aboutme.css";
export const Tech = (props: reqTech) => {
  return (
    <>
      <div className="icon-container">
        <img
          className={"icon" + props.imgClass}
          src={require("../icons/" + props.image)}
          alt=""
        />
        <p className="icon-name">{props.name}</p>
      </div>
    </>
  );
};
