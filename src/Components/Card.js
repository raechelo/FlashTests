import React, { Component } from 'react';
import Q from './Q';
import M from './M';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
     currQ: this.props.q,
     ansBank: this.props.shuffleAs
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState( {currQ: this.props.q} )
    }
  }

  render() {
    const multiclue = 
    <M 
    cq={this.props.cq} 
    iq={this.props.iq} 
    qObj={this.state.currQ} 
    q={this.state.currQ.question} 
    a={this.state.currQ.answer} 
    ansBank={this.props.ansBank} 
    /> 
    
    const clue = 
    <Q 
    cq={this.props.cq} 
    iq={this.props.iq} 
    qObj={this.state.currQ} 
    q={this.state.currQ.question} 
    a={this.state.currQ.answer} 
    />
    
      return (
        <div className="card">
        {this.state.currQ.type === 'Multi' ? multiclue : clue}
          <div className="card-btns">
            <button className="card-btn" onClick={this.props.nextQ}>Next Question</button>
          </div>
        </div>
      )
  }
}