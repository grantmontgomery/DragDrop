import React, { Component } from "react";
import { Piece } from "../Piece";
import "./List.css";

class List extends Component {
  state = {};
  render() {
    return (
      <div className="list-wrapper">
        <div className="list-title">Items</div>
        <Piece></Piece>
        <Piece></Piece>
      </div>
    );
  }
}

export default List;
