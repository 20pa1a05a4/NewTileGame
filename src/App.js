import {Switch, Route} from 'react-router-dom'
import Welcome from './components/Welcome'
import TileGame from './components/TileGame'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/game" component={TileGame} />
  </Switch>
)

export default App
