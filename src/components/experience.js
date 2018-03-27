import React from "react";
import experienceStyles from "./experience.module.scss";
import { projects } from "../constants";

export default () => (
  <div className={experienceStyles.experienceContainer}>
    <h1>Work Experience/Projects</h1>
    <div>
      {projects.map(project => {
        return (
          <div key={project.key} className={experienceStyles.projects}>
            <h2>
              <a target="_blank" href={project.url}>
                {project.title}
              </a>
            </h2>
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);
