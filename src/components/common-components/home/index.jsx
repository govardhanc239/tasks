import React from 'react'

export default function Home(props) {
  const {type,value,onChange=()=>{}} = props
  return (
    <div>
      <input type={type} value={value} onChange={onChange}/>
    </div>
  )
}
