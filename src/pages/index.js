import React from "react";

// components
import Container from "../components/container";
import Intro from "../components/intro";
import Experience from "../components/experience";
import Footer from "../components/footer";

// styles
import "../styles/index.module.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Intro />
        <Experience />
        <Footer />
      </Container>
    );
  }
}
