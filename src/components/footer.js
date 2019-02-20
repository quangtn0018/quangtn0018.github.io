import React from "react";
import footerStyles from "../styles/footer.module.scss";
import indexStyles from "../styles/index.module.scss";

import { person } from "../constants";

export default () => (
  <footer className={footerStyles.footer}>
    <p>
      © 2018 by{" "}
      <a target="_blank" href="https://quangtn0018.github.io">
        <span className={indexStyles.underline}>{person.name}</span>
      </a>
    </p>
  </footer>
);
