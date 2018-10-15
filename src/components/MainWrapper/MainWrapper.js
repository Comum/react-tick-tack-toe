import React from 'react'

// components
import Header from '../Header/Header'
import PlayingArea from '../PlayingArea/PlayingArea'

// style
import './MainWrapper.css'

const MainWrapper = ({ player, onClickPlayingArea }) => (
    <div className="mainWrapper">
        <Header player={player} />
        <PlayingArea onClickPlayingArea={onClickPlayingArea} />
    </div>
)

export default MainWrapper
