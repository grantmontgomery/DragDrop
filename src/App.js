import React, { Component } from "react";
import { AppContext } from "./AppContext";
import { Grid } from "./components";
import { List } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPiece: { id: null, value: null, color: null },
      pieces: []
    };
  }

  handleSubmit = (event, thestate) => {
    event.preventDefault();
    const { newPart, color } = thestate;
  };

  render() {
    return (
      <AppContext.Provider>
        <React.Fragment>
          <List></List>
          <Grid></Grid>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

export default App;
