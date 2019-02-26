import React, { Component } from 'react';
import Q from './Q';
import M from './M';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
     currQ: {},
     ansBank: [],
     displayQ: false
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState( {currQ: this.props.q, ansBank: this.props.shuffleAs} )
    }
  }

  render() {
    
    const multiclue = 
    <M 
    iq={this.props.iq} 
    qObj={this.state.currQ} 
    q={this.state.currQ.question} 
    a={this.state.currQ.answer} 
    ansBank={this.props.ansBank} 
    validA={this.checkAns}
    saveToStore={this.props.saveToStore}
    /> 

    const clue = 
    <Q 
    iq={this.props.iq} 
    qObj={this.state.currQ} 
    q={this.state.currQ.question} 
    a={this.state.currQ.answer} 
    validA={this.checkAns}
    saveToStore={this.props.saveToStore}
    />
    
      return (
        <div className="card">
          <div className="qCard">
          {this.state.currQ.type === 'Multi' ? multiclue : clue}
            <div className="card-btns">
              <button className="card-btn" onClick={this.props.nextQ}>Next Question</button>
              <button className="card-btn" onClick={this.props.startG} >Start Game</button>
              <button className="card-btn" onClick={this.props.oldCards} >Study Old Cards</button>
            </div>
          </div>
        </div>
      )
  }
}