import React, { Component } from 'react'
import DisplayClass from '../displayClass';

export default class InputBox extends Component {
  
  render() {
    let defaultName = "Govardhan";
    return (
      <div>
        <label>Enter Your Name</label> <br></br>
        <input type='text' name='fullName' id='fullName' defaultValue={defaultName} placeholder='enter full name'/>
        <DisplayClass name = {defaultName}/>
      </div>
    )
  }
}
