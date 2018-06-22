import React, { Component } from 'react';
import { store } from "../store";

import HelloWorld from './HelloWorld'
import ButtonGroup from './ButtonGroup'


const margin = {
    margin: "auto auto"
}

class App extends Component {

  render() {
      debugger;
    return (
      <div style={margin}>
          <HelloWorld tech={store.getState().tech}/>
          <ButtonGroup technologies={["React", "Elm", "React-redux"]} />
      </div>
    );
  }
}

export default App;
