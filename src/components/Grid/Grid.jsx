import React, { Component } from "react";
import { Square } from "../Square";
import "./Grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      gridWrapperWidth: 0
    };
  }

  componentDidMount() {
    const {
      startHour,
      startMinutes,
      startDay,
      endHour,
      endMinutes,
      endDay
    } = this.props;
    if (endDay !== startDay) {
      const dayDifference = endDay - startDay - 1;
      const hourDifference =
        24 -
        (startHour + startMinutes) +
        (endHour + endMinutes) +
        dayDifference * 24;
      this.setState({ hourDifference });
    } else {
      const hourDifference = endHour + endMinutes - (startHour + startMinutes);
      this.setState({ hourDifference });
    }
  }

  gridSliderStyle = () => {
    const { hourDifference } = this.state;
    return { width: `${(hourDifference + 1) * 200}px` };
  };

  render() {
    console.log(this.state);
    return (
      <div className="grid-wrapper">
        <div className="grid-slider" style={this.gridSliderStyle()}>
          <div className="date-header">
            <div className="hours-wrapper">
              <p>8:00pm</p>
            </div>
            <div className="hours-wrapper">
              <p>9:00pm</p>
            </div>
            <div className="hours-wrapper">
              <p>10:00pm</p>
            </div>
            <div className="hours-wrapper">
              <p>11:00pm</p>
            </div>
            <div className="hours-wrapper">
              <p>12:00pm</p>
            </div>
            <div className="hours-wrapper">
              <p>1:00am</p>
            </div>
            <div className="hours-wrapper">
              <p>2:00am</p>
            </div>
          </div>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
          <Square className="square"></Square>
        </div>
      </div>
    );
  }
}

export default Grid;
