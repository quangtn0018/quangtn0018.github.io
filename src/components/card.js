import React from "react";
import cardStyles from "../styles/card.module.scss";
import { projects } from "../constants";

export default () => (
  <section className={cardStyles.cardContainer}>
    {projects.map(project => {
      return (
        <a
          key={project.key}
          target="_blank"
          href={project.url}
          className={cardStyles.card}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className={cardStyles.overlay}>
            <div className={cardStyles.text}>{project.followLinkText}</div>
          </div>
        </a>
      );
    })}
  </section>
);
