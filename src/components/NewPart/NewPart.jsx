import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NewPart.css";

class NewPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPart: ""
    };
  }

  handleUpdate = event => {
    const { target } = event;
    this.setState({ newPart: target.value });
  };

  changeColor = event => {};
  render() {
    const { newPart } = this.state;
    return (
      <div className="newpart-wrapper">
        <span>Add something!</span>
        <br />
        <form action="">
          <label htmlFor="">What?</label>
          <input
            type="text"
            name="activity"
            value={newPart}
            onChange={this.handleUpdate}
          />
          <br />
          <label htmlFor="" name="time">
            When?
          </label>
          <DatePicker></DatePicker>
          <br />
          <label htmlFor="">Color</label>
          <br />
          <div className="color-picker-wrapper">
            <div
              className="color-picker red"
              onClick={this.changeColor}
              name="color"
              value="rgb()"
            ></div>
            <div
              className="color-picker orange"
              onClick={this.changeColor}
              name="color"
              value="rgb()"
            ></div>
            <div
              className="color-picker green"
              onClick={this.changeColor}
              name="color"
            ></div>
            <div
              className="color-picker blue"
              onClick={this.changeColor}
              name="color"
              value="rgb()"
            ></div>
            <div
              className="color-picker purple"
              onClick={this.changeColor}
              name="color"
              value="rgb()"
            ></div>
            <div
              className="color-picker black"
              onClick={this.changeColor}
              name="color"
              value="rgb()"
            ></div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPart;
