import React, { Component } from 'react';


export default class PlayerScore extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return <div className="scoreboard">
            <h2 className="player">Player Score</h2>
            <h3 className="p-score">0</h3>
          </div>
  }
}