import React from 'react';
//import personsData from '../../../persons.json';
import { useEffect,useState } from 'react'
//import personDetails from '../data/persons';
import axios from 'axios';

export default function DisplayData(props) {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(result=>{
              setPosts(result.data)
        })
        .catch(err=>console.error(err))
      })
    
  return (
    <div>
       {/* <h2>persons details</h2> */}
       <table border={2}>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
