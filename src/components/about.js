import React from "react";
import aboutStyles from "./about.module.scss";

export default () => (
  <div>
    <h1>About</h1>
    <div className={aboutStyles.aboutContainer}>
      {/* TODO needs styling */}
      <p className={aboutStyles.aboutDescription}>
        I'm a full stack web developer living in the Bay Area! On my free time,
        I blog on{" "}
        <a target="_blank" href="https://medium.com/@quangtn0018">
          Medium
        </a>{" "}
        about things I have learned while working on software projects. I also
        keep up to date with the latest technologies by experimenting with
        personal projects on{" "}
        <a target="_blank" href="https://github.com/quangtn0018">
          GitHub
        </a>{" "}
        and watching tech talks.
      </p>
    </div>
  </div>
);
