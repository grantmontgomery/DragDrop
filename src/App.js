import React, { Component } from "react";
import { AppContext } from "./AppContext";
import DatePicker from "react-datepicker";
import { Grid } from "./components";
import { List } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPiece: { id: null, value: null, color: null },
      pieces: [],
      loadApp: false,
      startDate: "",
      endDate: ""
    };
  }

  submitDates = () => {
    const {
      startDate,
      endDate,
      startDay,
      startHour,
      endDay,
      endHour
    } = this.state;

    if (startDate !== "" && endDate !== "") {
      // if(startDay < endDay){}
      this.setState({ loadApp: true });
    } else {
      alert("Must enter in a start and end date.");
    }
  };

  handleStartDateChange = (date, event) => {
    const formatted = new Date(date);
    let minutes = 0;
    if (formatted.getMinutes() !== 0) {
      minutes = 0.5;
    }
    this.setState({
      startDate: formatted,
      startHour: formatted.getHours(),
      startMinutes: minutes,
      startDay: formatted.getDate()
    });
  };

  handleEndDateChange = (date, event) => {
    const formatted = new Date(date);
    let minutes = 0;
    if (formatted.getMinutes() !== 0) {
      minutes = 0.5;
    }
    this.setState({
      endDate: formatted,
      endHour: formatted.getHours(),
      endMinutes: minutes,
      endDay: formatted.getDate()
    });
  };

  handleSubmit = (event, thestate) => {
    event.preventDefault();
    const { newPart, color } = thestate;
  };

  renderSelectionOrApp = () => {
    const { loadApp } = this.state;

    if (loadApp) {
      return this.renderFullApp();
    } else {
      return this.setHours();
    }
  };

  renderFullApp = () => {
    return (
      <React.Fragment>
        <List></List>
        <Grid {...this.state}></Grid>
      </React.Fragment>
    );
  };

  setHours = () => {
    return (
      <div>
        <span>Picke a date</span>
        <br />
        <DatePicker
          selected={this.state.startDate}
          name="startDate"
          onChange={this.handleStartDateChange}
          autoComplete="off"
          showTimeSelect
          dateFormat="Pp"
        ></DatePicker>
        <br />
        <DatePicker
          name="endDate"
          selected={this.state.endDate}
          autoComplete="off"
          onChange={this.handleEndDateChange}
          showTimeSelect
          dateFormat="Pp"
        ></DatePicker>
        <br />
        <button onClick={this.submitDates}>Submit</button>
      </div>
    );
  };

  render() {
    console.log(this.state);
    // return this.renderFullApp();
    // return this.setHours();
    return this.renderSelectionOrApp();
  }
}

export default App;
