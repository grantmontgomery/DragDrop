import React, { Component } from "react";
import { Piece } from "../Piece";
import { NewPart } from "../NewPart";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
      pieces: []
    };
  }

  handleSubmit = (event, newPiece) => {
    const { pieces } = this.state;
    event.preventDefault();
    this.setState({ pieces: [...pieces, newPiece] });
  };

  handleClick = event => {
    event.preventDefault();
    const { input } = this.state;
    !input ? this.setState({ input: true }) : this.setState({ input: false });
  };

  renderNewInput = () => {
    const { input } = this.state;
    if (input) {
      return <NewPart handleSubmit={this.handleSubmit}></NewPart>;
    } else {
      return;
    }
  };

  render() {
    console.log(this.state);
    const { pieces } = this.state;
    return (
      <div className="list-wrapper">
        <div className="list-title">
          <span>Items</span>
          <button onClick={this.handleClick}>+</button>
        </div>
        {this.renderNewInput()}
        {pieces.map(piece => (
          <Piece
            key={Math.floor(Math.random() * Math.floor(100))}
            color={piece.color}
            value={piece.newPieceValue}
          ></Piece>
        ))}
      </div>
    );
  }
}

export default List;
