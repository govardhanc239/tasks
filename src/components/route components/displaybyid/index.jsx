import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function DisplayById() {
    const [post,setPost] = useState({});
    const [inputId,setInputId] = useState('');

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${inputId}`).then(result=>{
           setPost(result.data)
        })
        .catch(error=>{
          console.error(error);
          setPost({})

        })
    },[inputId])

  return (
    <div>
       <input type='text' name='inputId' value={inputId} onChange={(e)=>setInputId(e.target.value)} placeholder='enter id'/>
       <h3>post details</h3>
       <p>{post.userId}</p>
       <p>{post.title}</p>
       <p>{post.body}</p>
       
    </div>
  )
}
