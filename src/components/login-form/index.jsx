import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { Form, Button  } from 'react-bootstrap';
// import Dashboard from '../dashboard';
import {useNavigate} from 'react-router-dom'
import Dashboard from '../dashboard';

const LoginForm = () => {
  const [loginUser, setLoginUser] = useState({
    email : '',
    password : ''
  });
  const navigate = useNavigate();
  const [currentUser,setCurrentUser] = useState(null)
  const users = useSelector(state=>state.users);
  console.log("users:",users)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  useEffect=(()=>{
    if(currentUser){
      console.log("current",currentUser)
      navigate('/dashboard')
    }
  },[currentUser,navigate])
  const handleSubmit = (e) => {
    e.preventDefault();
    const {email,password}= loginUser;
    const user = users.find(user=>user.email===email  && user.password===password)
    console.log("user:",user)
    if(user){
    setCurrentUser(user)
    }else{
    alert("Please enter valid Details")
    }
  };
  
  return (
    <div>
      {!currentUser && <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          value={loginUser.email} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password:</Form.Label>
        <Form.Control 
          type="password" 
          name="password" 
          value={loginUser.password} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br/>
      <p>Are you not registered?</p><br/>
      <Button variant="secondary" type="button" onClick={()=>navigate('/')}>register</Button>
    </Form> } 
    {currentUser && <Dashboard loggedUser ={currentUser}/> }
    </div>
  )
}
export default LoginForm