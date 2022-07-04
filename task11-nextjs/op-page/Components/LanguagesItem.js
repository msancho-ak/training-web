import React, { Component } from "react";
import Image from "next/image";

import spanishIcon from "../public/images/spain.svg";
import englishIcon from "../public/images/usa.svg";

const ENGLISH = "English";
export default class LanguagesItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`languages_item ${
          this.props.Language === ENGLISH ? " languages_item--selected" : ""
        } `}
      >
        <span className="hideDesktop"> {this.props.Language}</span>
        <img
          src={this.props.Language === ENGLISH ? englishIcon : spanishIcon}
          alt=""
        />
      </div>
    );
  }
}
