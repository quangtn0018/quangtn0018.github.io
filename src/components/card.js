import React from "react";

import cardStyles from "../styles/card.module.scss";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cardStyles.card}>
        <a target="_blank" href={this.props.project.url}>
          <h2>{this.props.project.title}</h2>
          <p>{this.props.project.description}</p>
          <div className={cardStyles.overlay}>
            <div className={cardStyles.text}>
              {this.props.project.followLinkText}
            </div>
          </div>
        </a>
      </div>
    );
  }
}
