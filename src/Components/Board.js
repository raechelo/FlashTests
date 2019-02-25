import React, { Component } from 'react';
import PlayerScore from './PlayerScore';
import Card from './Card';


export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      currQ: {},
      answerBank: [],
    }
  }

  shuffleQs = () => {
    let currentQ = this.state.questions.sort(() => 0.5 - Math.random()).pop()
    this.setState( {currQ: currentQ} )
  }

  shuffleAs = () => {
    let ans = this.state.questions.reduce((acc, q) => {
      acc.push(q.answer)
      return acc
    }, [])
    let shuffledAs = ans.sort(() => 0.5 - Math.random())
    this.setState( {answerBank: shuffledAs} )
  }

  render() {
    return (
        <div className="card-board">
          <Card q={this.state.currQ} 
          nextQ={this.shuffleQs} 
          ansBank={this.state.answerBank} 
          cq={this.props.cq}
          iq={this.props.iq}
          />
          <button 
          onClick={this.shuffleAs}>
          Start Game</button>
          <PlayerScore />
        </div>
    )
  }
}