import React, { Component } from "react";

export default class CharactersContainerGridItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`characters-container_grid_item ${
          this.props.show ? "" : "hideMore"
        }`}
      >
        <img src={this.props.imgPath} alt="" />
        <p className="characters-container_grid_item_characterName">
          {this.props.name}
        </p>
      </div>
    );
  }
}
