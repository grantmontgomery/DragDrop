import React, { Component } from "react";
import { AppContext } from "./AppContext";
import { Grid } from "./components";
import { List } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DragStart: this.DragStart,
      isDragging: this.isDragging,
      DragEnd: this.DragEnd
    };
  }

  DragStart = event => {};

  isDragging = event => {};

  DragEnd = event => {};

  render() {
    return (
      <React.Fragment>
        <List></List>
        <Grid></Grid>
      </React.Fragment>
    );
  }
}

export default App;
