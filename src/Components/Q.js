import React, { Component } from 'react';

export default class Q extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleChange = () => {
    this.setState( {value: window.event.target.value} )
  }

  //this is working but is not adding immediately to the correct array, though it is pushing into the array on the next question button instead of the check answer button
  // likely because i am changing state with the button

  checkAns =() => {
    if (this.state.value === this.props.a) {
      this.props.cq.push(this.props.qObj)
    } else {
      this.props.iq.push(this.props.qObj)
    }
  }

  render() {
    return (
      <div className="reg-q">
        <img src={this.props.q} />
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange} />
        <h5 className="hidden-ans">{this.props.a}</h5>
        <button className="card-btn" onClick={this.checkAns}>check answer</button>
      </div>
    )
  }
}