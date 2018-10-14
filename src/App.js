import React, { Component } from 'react';
import './App.css';

import MainWrapper from './components/MainWrapper/MainWrapper'

class App extends Component {
  state = {
    player: 1,
  }

  render() {
    return (
      <MainWrapper player={this.state.player}/>
    );
  }
}

export default App;
