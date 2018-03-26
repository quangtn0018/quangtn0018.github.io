import React from "react";
import footerStyles from "./footer.module.scss";
import { person } from "../constants";

export default () => (
  <footer className={footerStyles.footer}>
    <p>
      © 2018 by{" "}
      <a target="_blank" href="https://quangtn0018.github.io">
        {person.name}
      </a>
    </p>
  </footer>
);
