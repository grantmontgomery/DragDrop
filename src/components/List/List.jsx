import React, { Component } from "react";
import { Piece } from "../Piece";
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
    this.setState({ input: true });
  };

  render() {
    return (
      <div className="list-wrapper">
        <div className="list-title">
          <span>Items</span>
          <button onClick={this.handleClick}>+</button>
        </div>
        <Piece></Piece>
        <Piece></Piece>
      </div>
    );
  }
}

export default List;
