// Write your code here.
const EmojiCard = props => {
  const {singleEmoji, updatingScore} = props
  const {emojiUrl, emojiName, id} = singleEmoji
  const scoreUpdate = id => {
    updatingScore(id)
  }
  return (
    <li>
      <button onClick={scoreUpdate} type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
