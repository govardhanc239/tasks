import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function FetchData() {   
  const [posts ,setPosts]  = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(result=>{
          setPosts(result.data)
    })
    .catch(err=>console.error(err))
  })
    const navigator = useNavigate();
    const clickMe=()=>{
     navigator('/display')

    }
    console.log(posts);
    
  return (
    <div>
      <h2>persons details</h2>
      <p>click here to see <span>post </span>post details</p>

      <button type = "button"  onClick={clickMe}>Click</button>
    </div>
  )
}
