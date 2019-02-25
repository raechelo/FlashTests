import React, { Component } from 'react';
import questions from '../dataset.js';
import Header from './Header';
import Board from './Board'

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions : [],
      incorrect: [],
      correct: []
    }
  }

  componentWillMount() {
    this.setState ( {questions: questions} )
  }
  

  render() {
    return (
      <div className="gameboard">
        <Header />
        <Board cq={this.state.correct} 
        iq={this.state.incorrect} 
        questions={this.state.questions} 
        />
      </div>
    );
  }
}

export default App;