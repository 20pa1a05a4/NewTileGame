import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {name: ''}

  onChangeUsername = event => {
    this.setState({name: event.target.value})
  }

  onSubmitForm = event => {
    const {name} = this.state
    event.preventDefault()
    if (name !== '') {
      localStorage.setItem('name', name)
      const {history} = this.props
      history.replace('/game')
    }
  }

  render() {
    const {name} = this.state
    return (
      <div className="welcome-bg">
        <h1 className="welcome-main-heading">React Tiles</h1>
        <form className="welcome-from" onSubmit={this.onSubmitForm}>
          <h1 className="welcome-main-heading">Enter Your Name</h1>
          <input
            type="text"
            value={name}
            className="username-input"
            onChange={this.onChangeUsername}
          />
          <button className="play-button" type="submit">
            Play
          </button>
        </form>
      </div>
    )
  }
}

export default Welcome
