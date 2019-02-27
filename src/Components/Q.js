import React, { Component } from 'react';

export default class Q extends Component {
  constructor() {
    super();
    this.state = {
      userAns: '',
      ansToggle: false,
      btnDisable: false,
      displayMsg: false,
      correctA: false
    }
  }

  handleChange = () => {
    this.setState( {userAns: window.event.target.value} )
  }

  checkAns = () => {
    if (this.state.userAns === this.props.a && !this.props.cq.includes(this.props.qObj)) {
      this.setState( {correctA: true} )
      } else if (this.state.userAns !== this.props.a && !this.props.iq.includes(this.props.qObj)) {
      this.setState( {correctA: false} )
      this.props.iq.push(this.props.qObj)
      this.props.saveToStore()
    }
    this.setState( {ansToggle: !this.state.ansToggle, btnDisable: !this.state.btnDisable, displayMsg: !this.state.displayMsg } )
  }

  render() {

    return (
      <div className="reg-q">
        <img src={this.props.q} />
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange} />
        <h3>{this.state.ansToggle === true ? 'You got it, dude!' : `Sorry, that's incorrect! The answer is ${this.props.a}` }</h3>
        <button type="button" className="card-btn" onClick={this.checkAns}>check answer</button>
      </div>
    )
  }
}