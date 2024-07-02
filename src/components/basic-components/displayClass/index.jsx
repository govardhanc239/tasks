import React, { Component } from 'react'
import Display from '../display'
//import InputBox from '../inputbox'
export default class DisplayClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : this.props.name,
         location : this.props.location,
         department : this.props.dept
      }
    }
      
  render() {
    
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.state.location}</h2>
        <h2>{this.state.department}</h2>
        <Display currentState = {this.state}/>
      </div>
    )
  }
}
