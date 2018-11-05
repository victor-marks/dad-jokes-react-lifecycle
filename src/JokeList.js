import React, { Component } from 'react'
import Joke from './Joke'


class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: this.props.jokes,
      score: Array.from({ length: this.props.jokes.length }).fill(1)
    }
  }




  render() {
    let jokes = this.state.jokes.map((joke, i) => (
      <Joke joke={joke} score={this.state.score[i]} />
    ))
    console.log(this.state.score)
    return (
      < div className="JokeList" >
        <h1>Joke List</h1>
        <ul>
          {jokes}
        </ul>
      </div >
    )
  }
}

export default JokeList;