import React from 'react'

// components
import Header from '../Header/Header'
import PlayingArea from '../PlayingArea/PlayingArea'

// style
import './MainWrapper.css'

const MainWrapper = ({ player }) => (
    <div className="mainWrapper">
        <Header player={player} />
        <PlayingArea />
    </div>
)

export default MainWrapper
