import React from 'react'

// components
import Score from './Score/Score'
import PlayingPlayer from './PlayingPlayer/PlayingPlayer'

// style
import './Header.css'

const Header = ({ player, turn, gameOver }) => (
    <div className="header">
        <Score
            turn={turn}
            gameOver={gameOver}
            />
        <PlayingPlayer player={player} />
    </div>
)

export default Header
