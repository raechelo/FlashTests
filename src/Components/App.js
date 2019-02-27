import React, { Component } from 'react';
import Header from './Header';
import Board from './Board'

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions : [],
      incorrect: [],
    }
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/roTestCards')
    .then(response => response.json())
    .then(data => {
      this.setState({
        questions: data.roTestCards
      });
    })
    .catch(error => {
      throw new Error(error);
    });
  }

  saveToStorage = () => {
    let stringifiedFlashCards = JSON.stringify(this.state.incorrect);
		localStorage.setItem("savedForStudy", stringifiedFlashCards);
  }
  
  studyOldCards() {
    let localStorageCards = JSON.parse(localStorage.getItem("savedForStudy"))
    this.setState( {questions: this.localStorageCards} )
  }

  clearStorage() {

  }

  render() {
    return (
      <div className="gameboard">
        <Header />
        <Board iq={this.state.incorrect} 
        questions={this.state.questions} 
        saveToStore={this.saveToStorage}
        oldCards={this.studyOldCards}
        />
      </div>
    );
  }
}

export default App;