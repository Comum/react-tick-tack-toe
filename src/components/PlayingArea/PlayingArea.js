import React from 'react'

import PlayingContainer from './PlayingContainer/PlayingContainer'

// style
import './PlayingArea.css'

const PlayingArea = ({ onClickPlayingArea }) => (
    <div className="playingArea">
        <PlayingContainer onClickPlayingArea={onClickPlayingArea} />
    </div>
)

export default PlayingArea
