import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: props.maxChars
    };
  }

  handleMessage = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        name="message"
        id="message"
        onChange = {event => this.handleMessage(event)}
        value={this.state.message}/>
        <p> Remaining Characters: {this.state.charsLeft} </p>
      </div>
    );
  }
}

export default TwitterMessage;
