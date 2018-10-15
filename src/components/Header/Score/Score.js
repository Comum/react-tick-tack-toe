import React from 'react'

// style
import './Score.css'

const Score = ({ turn, gameOver }) => {
    let score = (
        <div>
            Current turn: {turn}
        </div>
    )

    if (gameOver) {
        score = (
            <div>
                Game over
            </div>
        )
    }

    return (
        <div className="score">
            {score}
        </div>
    )
}

export default Score
