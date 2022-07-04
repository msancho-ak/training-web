import React, { Component } from "react";
import footerImage from "../public/images/pngwing.svg";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="footer">
        <img src={footerImage} alt="" />
        <div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at
            vel congue scelerisque tortor tortor.
          </span>
        </div>
      </footer>
    );
  }
}
