import React, { Component } from 'react';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      // questions: this.props.questions,
      // answers: this.props.answers,
      // type: this.props.type
    }
  }

  render() {
    return <div className="card">
            <h4 className="card-question">switch statement here</h4>
          </div>
  }
}