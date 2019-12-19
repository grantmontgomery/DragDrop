import React, { Component } from "react";
import { Piece } from "../Piece";
import { NewPart } from "../NewPart";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false
    };
  }

  handleClick = event => {
    event.preventDefault();
    const { input } = this.state;
    !input ? this.setState({ input: true }) : this.setState({ input: false });
  };

  renderNewInput = () => {
    const { input } = this.state;
    if (input) {
      return <NewPart></NewPart>;
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="list-wrapper">
        <div className="list-title">
          <span>Items</span>
          <button onClick={this.handleClick}>+</button>
        </div>
        {this.renderNewInput()}
        <Piece></Piece>
        <Piece></Piece>
      </div>
    );
  }
}

export default List;
