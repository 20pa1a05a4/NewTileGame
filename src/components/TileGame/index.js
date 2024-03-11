import {Component} from 'react'
import TileItem from '../TileItem'
import './index.css'

const tiles = [
  {
    id: '1',
    tileId: '1',
    imageUrl:
      'https://i.etsystatic.com/16327816/r/il/20cba7/4389644067/il_794xN.4389644067_ap31.jpg',
    isRevealed: false,
  },
  {
    id: '2',
    tileId: '1',
    imageUrl:
      'https://i.etsystatic.com/16327816/r/il/20cba7/4389644067/il_794xN.4389644067_ap31.jpg',
    isRevealed: false,
  },
  {
    id: '3',
    tileId: '2',
    imageUrl: 'https://www.svgrepo.com/show/70540/clover-cards.svg',
    isRevealed: false,
  },
  {
    id: '4',
    tileId: '2',
    imageUrl: 'https://www.svgrepo.com/show/70540/clover-cards.svg',
    isRevealed: false,
  },
]

class TileGame extends Component {
  state = {username: '', prevCardId: 'None', score: 0}

  componentDidMount() {
    const userName = localStorage.getItem('name')
    this.setState({username: userName})
  }

  onSelectTile = id => {
    const {prevCardId} = this.state

    if (prevCardId === 'None') {
      this.setState({prevCardId: id})
    } else if (prevCardId === id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        prevCardId: 'None',
      }))
    } else {
      this.setState({prevCardId: 'None'})
    }
  }

  render() {
    const {score, username} = this.state

    return (
      <div className="game-bg">
        <h1 className="game-main-heading">Mahajong Game</h1>
        <div className="game-stats">
          <p className="game-score">Score: {score}</p>
          <p className="game-score">HI, {username}</p>
        </div>
        <ul className="ul">
          {tiles.map(eachElement => (
            <TileItem
              itemDetails={eachElement}
              onSelectTile={this.onSelectTile}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TileGame
