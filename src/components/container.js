import React from "react";
import containerStyles from "../styles/containerStyles.module.scss";

export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
);
