import React, { Component } from "react";
import "./Piece.css";

class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      originalX: 0,
      originalY: 0,
      translateX: 0,
      translateY: 0,
      lastTranslateX: 0,
      lastTranslateY: 0,
      draggingElement: null,
      droppable: null
    };
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseDown = ({ target, clientX, clientY }) => {
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
    this.setState({ draggingElement: target });
    if (this.props.onDragStart) {
      this.props.onDragStart();
    }

    this.setState({ isDragging: true, originalX: clientX, originalY: clientY });
  };

  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { onDrag } = this.props;
    const { draggingElement } = this.state;
    draggingElement.hidden = true;
    const elemBelow = document.elementFromPoint(clientX, clientY);
    draggingElement.hidden = false;

    this.setState({ droppable: elemBelow });

    if (!isDragging) {
      return;
    }

    this.setState(
      prevState => ({
        translateX: clientX - prevState.originalX + prevState.lastTranslateX,
        translateY: clientY - prevState.originalY + prevState.lastTranslateY
      }),
      () => {
        if (onDrag) {
          onDrag({
            translateX: this.state.translateX,
            translateY: this.state.translateY
          });
        }
      }
    );
  };

  handleMouseUp = () => {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);

    this.setState(
      {
        originalX: 0,
        originalY: 0,
        lastTranslateX: this.state.translateX,
        lastTranslateY: this.state.translateY,
        isDragging: false,
        draggingElement: null,
        droppable: null
      },
      () => {
        if (this.props.onDragEnd) {
          this.props.onDragEnd();
        }
      }
    );
  };
  render() {
    const { translateX, translateY, isDragging, droppable } = this.state;
    console.log(droppable);
    return (
      <div
        className="piece-wrapper"
        onMouseDown={this.handleMouseDown}
        style={{
          transform: `translate(${translateX}px, ${translateY}px)`,
          cursor: `${isDragging ? "grabbing" : "grab"}`,
          zIndex: `${isDragging ? 1000 : 1}`,
          transition: `${isDragging ? "none" : "all 500ms"}`
          // position: `${isDragging ? "absolute" : "relative"}`
        }}
      ></div>
    );
  }
}

export default Piece;
