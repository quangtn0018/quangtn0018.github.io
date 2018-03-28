import React from "react";

// components
import Container from "../components/container";
import Footer from "../components/footer";
import Card from "../components/card";
import NavHeader from "../components/navHeader";

// styles
import "./index.module.scss";

// constants
import CONSTANTS from "../constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const cardToRender = {
      isHome: true,
      isAbout: false
    };

    this.state = {
      cardToRender,
      navItems: CONSTANTS.navItems
    };
  }

  handleNavIconOnClick = (e, key) => {
    e.preventDefault();

    let cardToRender = {
      isHome: false,
      isAbout: false
    };

    let navItems = CONSTANTS.navItems.slice();

    switch (key) {
      case "home":
        cardToRender.isHome = true;
        navItems = navItems.map(item => {
          return {
            ...item,
            isSelected: item.key === "home"
          };
        });
        break;
      case "about":
        cardToRender.isAbout = true;
        navItems = navItems.map(item => {
          return {
            ...item,
            isSelected: item.key === "about"
          };
        });
        break;
      default:
        navItems = navItems.map(item => {
          return {
            ...item,
            isSelected: item.key === "portfolio"
          };
        });
    }

    this.setState({
      cardToRender,
      navItems
    });
  };

  render() {
    return (
      <Container>
        <NavHeader
          navItems={this.state.navItems}
          navIconOnClick={this.handleNavIconOnClick}
        />
        <Card cardToRender={this.state.cardToRender} />
        <Footer />
      </Container>
    );
  }
}
