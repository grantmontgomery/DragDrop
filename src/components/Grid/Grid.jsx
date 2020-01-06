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
  repeatString = (string, number) => {
    let newString = "";
    while (number > 0) {
      newString += string;
      number--;
    }
    return newString;
  };

  gridSliderStyle = () => {
    const { hourDifference } = this.state;
    const width = (hourDifference + 1) * 200;
    const amountOfColumns = width / 100;
    const gridColumnSize = " 100px";
    const squareStr = " square";
    const headerStr = " header";
    const rowStr = ` "${this.repeatString(squareStr, amountOfColumns)}"`;
    const firstRow = `"${this.repeatString(headerStr, amountOfColumns)}"`;
    return {
      width: `${width}px`,
      gridTemplateColumns: ` ${this.repeatString(
        gridColumnSize,
        amountOfColumns
      )}`,
      gridTemplateAreas: `${firstRow}${this.repeatString(rowStr, 7)}`
    };
  };
  renderHoursSections() {
    const { startHour, startDay, endDay, endHour } = this.props;
    if (startDay !== endDay) {
      const hours = [];
      let startHoursCount = startHour;
      if (startHoursCount === 24) {
        let endHoursCount = 0;
        while (endHoursCount < endHour) {
          endHoursCount >= 12
            ? hours.push(`${24 - endHoursCount}:00 p.m`)
            : hours.push(`${endHoursCount}:00 a.m`);
          endHoursCount++;
        }
      } else {
        while (startHoursCount > 24) {
          startHoursCount >= 12
            ? hours.push(`${24 - startHoursCount}:00 p.m`)
            : hours.push(`${startHoursCount}:00 a.m`);
          startHoursCount++;
        }
      }
      console.log(hours);
    } else {
      const hours = [];
      let startHoursCount = startHour;
      let endHoursCount = endHour;
      while (startHoursCount > endHoursCount) {
        startHoursCount >= 12
          ? hours.push(`${24 - startHoursCount}:00 p.m`)
          : hours.push(`${startHoursCount}:00 a.m`);
        startHoursCount++;
      }
      console.log(hours);
    }
  }
  render() {
    console.log(this.renderHoursSections());

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
          {/* <Square className="square"></Square>
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
          <Square className="square"></Square> */}
        </div>
      </div>
    );
  }
}

export default Grid;
