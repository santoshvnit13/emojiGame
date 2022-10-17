/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    card: false,
    isWon: false,
  }

  updatingScore = id => {
    this.setState(prevState => {
      const {score, card} = prevState
      if (prevState.score === 12) {
        return {card: true, isWon: true}
      } else {
        return {
          score: prevState.score + 1,
          isWon: false,
          topScore: prevState.score + 1,
        }
      }
    })
  }

  topScoreUpdating = () => {
    this.setState({topScore: 0})
  }
  render() {
    const {score, topScore, card, isWon} = this.state
    const {emojisList} = this.props
    return (
      <div>
        {card && (
          <WinOrLoseCard
            isWon={isWon}
            topScoreUpdating={this.topScoreUpdating}
          />
        )}
        {!card && (
          <div>
            <NavBar score={score} topScore={topScore} />
            <ul>
              {emojisList.map(singleEmoji => (
                <EmojiCard
                  singleEmoji={singleEmoji}
                  key={singleEmoji.id}
                  updatingScore={this.updatingScore}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
