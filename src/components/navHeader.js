import React from "react";
import navHeaderStyles from "./navHeader.module.scss";
import { navIconProps } from "../constants";

export default ({ navItems, navIconOnClick }) => (
  <nav className={navHeaderStyles.navHeaderContainer}>
    <ul className={navHeaderStyles.ul}>
      {navItems.map(item => {
        const classnames = `${navHeaderStyles.icon} ${
          item.isSelected ? navHeaderStyles.selectedIcon : ""
        }`;
        return (
          <li
            tabIndex="0"
            className={classnames}
            onClick={e => navIconOnClick(e, item.key)}
            key={item.key}
          >
            <item.tag iconProps={navIconProps} />
          </li>
        );
      })}
    </ul>
  </nav>
);
