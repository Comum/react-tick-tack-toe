import React from 'react'

// components
import Header from '../Header/Header'
import PlayingArea from '../PlayingArea/PlayingArea'

// style
import './MainWrapper.css'

const MainWrapper = ({ player, turn, gameOver, onClickPlayingArea }) => (
    <div className="mainWrapper">
        <Header
            player={player}
            turn={turn}
            gameOver={gameOver}
            />
        <PlayingArea onClickPlayingArea={onClickPlayingArea} />
    </div>
)

export default MainWrapper
