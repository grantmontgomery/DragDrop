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
  render() {
    const { newPart } = this.state;
    return (
      <div className="newpart-wrapper">
        <input type="text" value={newPart} onChange={this.handleUpdate} />
        <DatePicker></DatePicker>
      </div>
    );
  }
}

export default NewPart;
