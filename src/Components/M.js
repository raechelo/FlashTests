import React, { Component } from 'react';

export default class M extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAns: '',
      ansToggle: false
    }
  }

  // updateState = () => {
  //   this.setState( {userAns: window.event.target.innerText} )
  // }

  validateAns = () => {
    if (window.event.target.innerText === this.props.a) {
      this.props.cq.push(this.props.qObj)
    } else if (window.event.target.innerText !== this.props.a) {
      this.props.iq.push(this.props.qObj)
    }
      this.setState( {ansToggle: !this.state.ansToggle} )
  }

  render () {
    return (
      <div className="multi-q">
        <h4>{this.props.q}</h4>
        <div className="mcq-btns" onClick={this.validateAns}>
          <button>{this.props.ansBank[0]}</button>
          <button>{this.props.a}</button>
          <button>{this. props.ansBank[1]}</button>
          <button>{this.props.ansBank[2]}</button>
        </div>
      </div>
    )
  }
}