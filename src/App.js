import React, { Component } from 'react'
import './App.css'

import MainWrapper from './components/MainWrapper/MainWrapper'

class App extends Component {
  state = {
    player: 1,
  }

  onClickPlayingArea = () => {
    let newPlayer = 1

    if (this.state.player === 1) {
      newPlayer = 2
    }

    this.setState({
      player: newPlayer,
    })
  }

  render() {
    return (
      <MainWrapper
        player={this.state.player}
        onClickPlayingArea={this.onClickPlayingArea}
        />
    )
  }
}

export default App;
