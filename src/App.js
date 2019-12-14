import React, { Component } from "react";
import { Grid } from "./components";
import { List } from "./components";

class App extends Component {
  state = {};
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
