import React, { Component } from 'react'

class Joke extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: this.props.score
    }

    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleDownVote = this.handleDownVote.bind(this)
  }

  handleUpVote(evt) {
    evt.preventDefault();
    this.setState({ score: this.state.score + 1 });
    // console.log(this.state.score)
  }

  handleDownVote(evt) {
    evt.preventDefault();
    this.setState({ score: this.state.score - 1 });
  }

  render() {
    return <div className="Joke">
      <p>{this.props.text}>>>>>>>>>>>>Score: {this.state.score}</p>
      <button onClick={this.handleUpVote}>UpBoat</button>
      <button onClick={this.handleDownVote}>DownBoat</button>
    </div>
  }
}

export default Joke;