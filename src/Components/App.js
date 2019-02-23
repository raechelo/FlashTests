import React, { Component } from 'react';
import questions from '../dataset.js';
import Board from './Board';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions : []
    }
  }

  componentWillMount() {
    this.setState ( {questions: questions} )
  }
  
  render() {
    return (
      <div className="gameboard">
        <Header />
        <Board clues={this.state.questions}/>
      </div>
    );
  }
}

export default App;
