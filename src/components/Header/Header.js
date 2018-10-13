import React from 'react'

// components
import Score from './Score/Score'
import PlayingPlayer from './PlayingPlayer/PlayingPlayer'

// style
import './Header.css'

const Header = () => (
    <div className="header">
        <Score />
        <PlayingPlayer />
    </div>
)

export default Header
