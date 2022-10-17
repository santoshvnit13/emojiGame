// Write your code here.
const WinOrLoseCard = props => {
  const {isWon, topScoreUpdating} = props
  const topScoreUpdate = () => {
    topScoreUpdating()
  }

  if (isWon) {
    return (
      <div>
        <div>
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>12/12</p>
          <button onClick={topScoreUpdate}>Play Again</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <h1>You Lose</h1>
          <p>Score</p>
          <p>""</p>
          <button onClick={topScoreUpdate}>Play Again</button>
        </div>
        <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" />
      </div>
    )
  }
}

export default WinOrLoseCard
