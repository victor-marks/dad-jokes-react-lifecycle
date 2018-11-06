import React, { Component } from 'react'
import Joke from './Joke'

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: this.props.jokes
    }
  }

  render() {
    // console.log(this.state.jokes)
    let jokes = this.state.jokes.map(obj => (
      <Joke key={obj.id} text={obj.joke} score={obj.score} handleUpVote={this.handleUpVote} handleDownVote={this.handleDownVote} />
    ))
    // console.log(jokes)
    console.log(this.state);
    return (
      < div className="JokeList" >
        <h1>Joke List</h1>
        {jokes}
      </div >
    )
  }
}

export default JokeList;