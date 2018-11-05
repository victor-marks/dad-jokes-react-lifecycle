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
      let jokeObjects = res.data.results
      let jokeArray = jokeObjects.map(j => {
        return j.joke
      })

      this.setState({ jokes: [...jokeArray], isLoading: false })
    })
  }


  render() {
    console.log(this.state.isLoading)
    return this.state.isLoading ? <h1>Loading...</h1> : <JokeList jokes={this.state.jokes} />
  }

}



export default Cheez;