import React from 'react'

// components
import Score from './Score/Score'
import PlayingPlayer from './PlayingPlayer/PlayingPlayer'

// style
import './Header.css'

const Header = ({ player }) => (
    <div className="header">
        <Score />
        <PlayingPlayer player={player} />
    </div>
)

export default Header
