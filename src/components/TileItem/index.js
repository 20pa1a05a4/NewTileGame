import './index.css'

const TileItem = props => {
  const {itemDetails, onSelectTile} = props
  const {tileId, imageUrl} = itemDetails

  const onClickTile = () => {
    onSelectTile(tileId)
  }
  return (
    <li className="li">
      <button onClick={onClickTile} type="button" className="tile-button">
        <img src={imageUrl} className="image" alt="tile" />
      </button>
    </li>
  )
}

export default TileItem
