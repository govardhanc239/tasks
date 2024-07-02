import React, { Component } from 'react'

export default class Display extends Component {
  constructor(currentState) {
    super(currentState)
  
    this.state = currentState;
        
  }
  
  render() {
    const handleChange = ()=>{
        this.setState({
         name : "prasanth",
         location : "Hyderbad",
         department : "Analytics"
        }) 
     }
    return (
      <div>
        
        <h1>{this.state.name}</h1>
        <h1>{this.state.location}</h1>
        <h1>{this.state.department}</h1>
        <button type='button' name='btn' onClick={()=>handleChange()}>change</button>
      </div>
    )
  }
}
