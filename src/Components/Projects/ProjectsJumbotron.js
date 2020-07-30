import React from "react";
import "./ProjectsJumbotron.css";
import Jumbotron from "react-bootstrap/Jumbotron";

function ProjectsJumbotron() {
  return (
    <Jumbotron fluid className="jumboTron ProjectsJumbotron">
      <h1 id="h1Text">Fluid jumbotron</h1>
      <p id="pText">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
    </Jumbotron>
  );
}
export default ProjectsJumbotron;
