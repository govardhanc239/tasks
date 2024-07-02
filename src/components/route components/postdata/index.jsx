import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react';

export default function PostData() {
    const [posts,setPosts] = useState([]);
 const userData = {
    userId :110,
    title :"Govardhan Reddy Chappidi",
    body :"I am from digital and my Reporting manager is Siddhartha Sarva"
 }

   axios.post('https://jsonplaceholder.typicode.com/posts',userData).then(res=>{
      console.log("the resulting data is",res.data)
   }).catch(err=>console.error(err))
  return (
    <div>
      
    </div>
  )
}
