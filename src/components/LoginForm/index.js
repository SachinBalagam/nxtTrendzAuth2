// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showError: false, errorMessage: ''}

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = ErrorMsg => {
    this.setState({showError: true, errorMessage: ErrorMsg})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="username-container">
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="input"
          onChange={this.onUsernameChange}
          value={username}
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="username-container">
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="input"
          onChange={this.onPasswordChange}
          value={password}
        />
      </div>
    )
  }

  render() {
    const {showError, errorMessage} = this.state
    return (
      <div className="login-page-container">
        <div className="logo-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image1"
          />
          <form className="form-container" onSubmit={this.onFormSubmit}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="login-image2"
            />
            {this.renderUsername()}
            {this.renderPassword()}
            <button type="submit" className="login-button">
              Login
            </button>
            {showError && <p className="error-message">*{errorMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
