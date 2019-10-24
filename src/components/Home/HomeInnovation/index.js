import React from "react";
import "./innovation.styles.scss";
import button from "../../brandedButton/index";

const Innovation = () => (
  <div className="innovation">
    <div className="textcontainer">
      <h1 className="title">
        {" "}
        Disruptive Innovation and Collaboration for your workplace
      </h1>
      <div className="text">
        Empower your teams to collaborate in a creative/interactive way, get
        them to solve problems, capture ideas, run workshops, collect
        requirements, design new products and manage projects in one single
        place with high visibility to status, progress and team participation.
      </div>
    </div>
    <button className="button">
      Get <br /> Started
    </button>
  </div>
);

export default Innovation;
