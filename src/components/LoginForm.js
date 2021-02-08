import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event)  => {
    event.preventDefault()
    this.state.username && this.state.password != "" ? this.props.handleLogin(this.state) : console.log("error")
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleChange(event)}
            id="username"
            name="username"
            type="text"
            value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={event => this.handleChange(event)}
              id="password"
              name="password"
              type="password"
              value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
