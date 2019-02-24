import React from "react";

import { projects } from "../constants";
import experienceStyles from "../styles/experience.module.scss";
import Card from "./card";

export default () => (
  <div className={experienceStyles.experienceContainer}>
    <h1>Portfolio</h1>
    <div className={experienceStyles.cardContainer}>
      {projects.map(project => (
        <Card key={project.key} project={project} />
      ))}
    </div>
  </div>
);
