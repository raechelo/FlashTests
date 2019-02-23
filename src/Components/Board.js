import React, { Component } from 'react';
import PlayerScore from './PlayerScore';
import Card from './Card';


export default class Board extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return <div className="card-board">
            <Card />
            <PlayerScore />
          </div>
  }
}