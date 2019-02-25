import React, { Component } from 'react';

export default class M extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="multi-q">
        <h4>{this.props.q}</h4>
        <button>A: {this.props.ansBank[0]}</button>
        <button>B: {this.props.a}</button>
        <button>C: {this. props.ansBank[1]}</button>
        <button>D: {this.props.ansBank[2]}</button>
      </div>
    )
  }
}