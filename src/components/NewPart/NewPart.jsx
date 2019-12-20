import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NewPart.css";

class NewPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPieceValue: "",
      color: "red"
    };
  }

  handleUpdate = event => {
    const { target } = event;
    this.setState({ newPieceValue: target.value });
  };

  changeColor = event => {
    event.preventDefault();
    const { target } = event;
    this.setState({
      [target.getAttribute("name")]: target.getAttribute("value")
    });
  };

  render() {
    const { newPieceValue } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className="newpart-wrapper">
        <span>Add something!</span>
        <br />
        <form action="" onSubmit={e => handleSubmit(e, this.state)}>
          <label htmlFor="">What?</label>
          <input
            type="text"
            name="activity"
            value={newPieceValue}
            onChange={this.handleUpdate}
          />
          <br />
          {/* <label htmlFor="" name="time">
            When?
          </label>
          <DatePicker></DatePicker> */}
          <br />
          <label htmlFor="">Color</label>
          <br />
          <div className="color-picker-wrapper">
            <div
              className="color-picker red"
              onClick={this.changeColor}
              name="color"
              value="(233, 53, 53)"
            ></div>
            <div
              className="color-picker orange"
              onClick={this.changeColor}
              name="color"
              value="(255, 187, 0)"
            ></div>
            <div
              className="color-picker green"
              onClick={this.changeColor}
              name="color"
              value="(1, 192, 87)"
            ></div>
            <div
              className="color-picker blue"
              onClick={this.changeColor}
              name="color"
              value="(0, 162, 255)"
            ></div>
            <div
              className="color-picker purple"
              onClick={this.changeColor}
              name="color"
              value="(169, 43, 241)"
            ></div>
            <div
              className="color-picker black"
              onClick={this.changeColor}
              name="color"
              value="(30, 30, 30)"
            ></div>
          </div>
          <button
            className="create-button"
            onClick={e => handleSubmit(e, this.state)}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default NewPart;
