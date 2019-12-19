import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NewPart.css";

class NewPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPart: "",
      color: "red"
    };
  }

  handleUpdate = event => {
    const { target } = event;
    this.setState({ newPart: target.value });
  };

  changeColor = event => {
    event.preventDefault();
    const { target } = event;
    this.setState({
      [target.getAttribute("name")]: target.getAttribute("value")
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newPart, color } = this.state;
    // newpart && color ?
  };

  render() {
    const { newPart } = this.state;
    console.log(this.state);
    return (
      <div className="newpart-wrapper">
        <span>Add something!</span>
        <br />
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">What?</label>
          <input
            type="text"
            name="activity"
            value={newPart}
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
              value="rgb(233, 53, 53)"
            ></div>
            <div
              className="color-picker orange"
              onClick={this.changeColor}
              name="color"
              value="rgb(255, 187, 0)"
            ></div>
            <div
              className="color-picker green"
              onClick={this.changeColor}
              name="color"
              value="rgb(1, 192, 87)"
            ></div>
            <div
              className="color-picker blue"
              onClick={this.changeColor}
              name="color"
              value="rgb(0, 162, 255)"
            ></div>
            <div
              className="color-picker purple"
              onClick={this.changeColor}
              name="color"
              value="rgb(169, 43, 241)"
            ></div>
            <div
              className="color-picker black"
              onClick={this.changeColor}
              name="color"
              value="rgb(30, 30, 30)"
            ></div>
          </div>
          <button className="create-button" onClick={this.handleSubmit}>
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default NewPart;
