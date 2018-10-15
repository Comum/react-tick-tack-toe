import React from 'react'

// style
import './PlayingContainer.css'

const PlayingContainer = ({ onClickPlayingArea }) => {
    const handleClick = (e) => {
        onClickPlayingArea()
    }

    return (
        <div className="playingContainer">
            <ul className="playingContainer--rowsContainer" onClick={handleClick}>
                <li className="playingContainer--itemContainer">
                    <div className="playingContainer--topItem--left"></div>
                    <div className="playingContainer--topItem--center"></div>
                    <div className="playingContainer--topItem--right"></div>
                </li>
                <li className="playingContainer--itemContainer">
                    <div className="playingContainer--middleItem--left"></div>
                    <div className="playingContainer--middleItem--center"></div>
                    <div className="playingContainer--middleItem--right"></div>
                </li>
                <li className="playingContainer--itemContainer">
                    <div className="playingContainer--bottomItem--left"></div>
                    <div className="playingContainer--bottomItem--center"></div>
                    <div className="playingContainer--bottomItem--right"></div>
                </li>
            </ul>
        </div>
    )
}

export default PlayingContainer
