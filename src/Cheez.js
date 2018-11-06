import React, { Component } from 'react'
import JokeList from './JokeList'
import axios from 'axios'

class Cheez extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      isLoading: true
    }
  }

  componentDidMount() {
    axios.get("https://icanhazdadjoke.com/search", { headers: { Accept: "application/json" }, params: { limit: 10 } }).then(res => {

      let jokes = res.data.results.map(j => {
        return { ...j, score: 1 }
      })
      this.setState({ jokes, isLoading: false })

    })
  }


  render() {
    return this.state.isLoading ? <h1>Loading...</h1> : <JokeList jokes={this.state.jokes} />
  }

}



export default Cheez;