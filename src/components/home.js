import React from "react";
import profileImg from "../assets/images/profileImg.jpg";
import homeStyles from "./home.module.scss";
import { contacts, person, cardIconProps } from "../constants";

export default () => (
  <div>
    <span className={homeStyles.avatar}>
      <img className={homeStyles.profileImg} src={profileImg} alt="avatar" />
    </span>
    <div>
      <h1 className={homeStyles.name}>{person.name}</h1>
      <p className={homeStyles.jobTitle}>{person.title}</p>
    </div>
    <ul className={homeStyles.ul}>
      {contacts.map(item => (
        <a
          target="_blank"
          href={item.url}
          className={homeStyles.contact}
          key={item.key}
        >
          <item.tag iconProps={cardIconProps} />
        </a>
      ))}
    </ul>
  </div>
);
