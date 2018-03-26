import React from "react";
import Home from "./home";
import About from "./about";
import Experience from "./experience";
import cardStyles from "./card.module.scss";

export default ({ cardToRender }) => (
  <section className={cardStyles.cardContainer}>
    <div className={cardStyles.card}>
      {!cardToRender.isHome && !cardToRender.isAbout && <Experience />}
      {cardToRender.isHome && <Home />}
      {cardToRender.isAbout && <About />}
    </div>
  </section>
);
