// Write your code here.
const NavBar = props => {
  const {score, topScore} = props
  return (
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h1>Emoji Game</h1>
      <p>Score: 0</p>
      <p>Top Score: 0</p>
    </nav>
  )
}

export default NavBar
