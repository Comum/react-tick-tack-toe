import React, { Component } from 'react'
import './App.css'

import MainWrapper from './components/MainWrapper/MainWrapper'

class App extends Component {
  state = {
    player: 1,
    turn: 1,
    gameOver: false,
  }

  onClickPlayingArea = () => {
    let newPlayer = this.state.player === 1 ? 2 : 1
    let newTurn = this.state.turn
    let isGameOver = false

    if (this.state.turn === 9) {
      isGameOver = true
    }

    if (isGameOver) {
      this.setState({
        gameOver: isGameOver,
      })
      return
    }

    newTurn = newTurn + 1

    this.setState({
      player: newPlayer,
      turn: newTurn,
      gameOver: isGameOver,
    })
  }

  render() {
    return (
      <MainWrapper
        player={this.state.player}
        turn={this.state.turn}
        gameOver={this.state.gameOver}
        onClickPlayingArea={this.onClickPlayingArea}
        />
    )
  }
}

export default App;
