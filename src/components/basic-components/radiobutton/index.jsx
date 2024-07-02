import React from 'react'
import Display from '../displayClass'

export default function RadioButton() {
  let defaultDept = "DT"
  return (
    <div>
      <p> select </p>
      <input type='radio' name='dept' value="DT" defaultValue={defaultDept} selected />
      <label>DT</label>
      <input type='radio' name='dept' value="analytics"/>
      <label>Analytics</label>
      <input type='radio'name='dept'value="cloud services"/>
      <label>Cloud Services</label>
      <Display dept = {defaultDept}/>
    </div>
  )
}
