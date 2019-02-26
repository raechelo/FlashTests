import React, { Component } from 'react';
import PlayerScore from './PlayerScore';
import Card from './Card';


export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currQ: {},
      answerBank: [],
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState( {questions: this.props.questions} )
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
        <div className="card-board" >
          <Card q={this.state.currQ} 
          nextQ={this.shuffleQs} 
          ansBank={this.state.answerBank} 
          iq={this.props.iq}
          startG={this.shuffleAs}
          saveToStore={this.props.saveToStore}
          oldCards={this.oldCards}
          />
          <PlayerScore />
        </div>
    )
  }
}