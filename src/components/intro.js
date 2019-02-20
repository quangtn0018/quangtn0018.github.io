import React from "react";

import introStyles from "../styles/intro.module.scss";
import indexStyles from "../styles/index.module.scss";

import { person, contacts } from "../constants";
import { CSSTransition } from "react-transition-group";

export default class Intro extends React.Component {
  state = {
    isSocialMediaSelected: false,
    isIntroSelected: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isIntroSelected: true
      });
    }, 300);
  }

  handleSocialMediaSelected = e => {
    this.setState(state => ({
      isSocialMediaSelected: !state.isSocialMediaSelected
    }));
  };

  handleIntroSelected = e => {
    this.setState(state => ({
      isIntroSelected: !state.isIntroSelected
    }));
  };

  getContactsList = () => {
    return contacts.map(item => {
      return (
        <CSSTransition
          key={item.key}
          in={this.state.isSocialMediaSelected}
          timeout={item.timeout}
          classNames={{
            enter: introStyles[`${item.key}Enter`],
            enterActive: introStyles[`${item.key}EnterActive`],
            exit: introStyles[`${item.key}Exit`],
            exitActive: introStyles[`${item.key}ExitActive`]
          }}
        >
          <a target="_blank" href={item.url}>
            <span className={indexStyles.underline}>{item.label}</span>
          </a>
        </CSSTransition>
      );
    });
  };

  render() {
    const contactsList = this.getContactsList();
    const introDuration = 800;

    return (
      <CSSTransition
        in={this.state.isIntroSelected}
        timeout={introDuration}
        classNames={{
          enter: introStyles.introEnter,
          enterActive: introStyles.introEnterActive
        }}
      >
        <div
          className={`${introStyles.intro} ${
            this.state.isIntroSelected
              ? introStyles.appear
              : introStyles.disappear
          }`}
        >
          <div>
            <span
              className={`${indexStyles.underline} ${
                this.state.isSocialMediaSelected
                  ? indexStyles.underlineActive
                  : ""
              }`}
              onClick={this.handleSocialMediaSelected}
            >
              {person.name}
            </span>
          </div>
          <div>{person.title}</div>
          <div>{person.location}</div>

          <ul
            className={`${introStyles.socialMedia} ${
              this.state.isSocialMediaSelected
                ? introStyles.appear
                : introStyles.disappear
            }`}
          >
            {contactsList}
          </ul>
        </div>
      </CSSTransition>
    );
  }
}
