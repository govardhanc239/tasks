import React from 'react'
import DisplayClass from '../displayClass';

export default function DropDown() {
  let defaultLocation = "Chennai";
  return (
    <div>
        <label>select branch</label><br></br>
      <select id='drop-down' defaultValue={defaultLocation}>
        <option value="hyderabad"   >Hyderabad</option>
        <option value="chennai"  selected>Chennai</option>
        <option value="kolhapur" >Kolhapur</option>
        <option value= "vizag"  >Vizag</option>
      </select>
      <DisplayClass location = {defaultLocation}/>
    </div>
  )
}
