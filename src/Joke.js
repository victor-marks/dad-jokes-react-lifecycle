import React, { Component } from 'react'


class Joke extends Component {

  render() {
    return <li> {this.props.joke}, {this.props.score} </li>
  }
}

export default Joke;