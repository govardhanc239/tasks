import React, { useState } from 'react'
import { Form, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { registerUser } from '../actions';
import { isPasswordValid } from '../validations';

export default function RegisterForm() {
    const [user,setUser] = useState({
        name :'',
        email:'',
        gender :'',
        role :'user',
        password : '',
        confirmPassword :'',
        terms :''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange=(e)=>{
      const {name,value,type,checked} = e.target;
      setUser(prev=>({
        ...prev,
        [name]: type==='check box' ? checked : value
      }))
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(registerUser(user))
      fetch('http://localhost:3000/users',{
        method :"POST",
        headers :{
          'Content-type' :"application/json"
        },
        body : JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
     alert("Registration Successfully!!")
     navigate('/login')
    }
  return (
    <div>
        <h2>RegisterForm</h2>
      
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter your name" 
          name="name" 
          value={user.name} 
          onChange={handleChange} 
          required
        />
      </Form.Group>
      <Form.Group controlId='formEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' 
        placeholder='enter your email' 
        name = 'email'
        value={user.email}
        onChange={handleChange}
        required
        />
      </Form.Group>

      <div className="radio-button-container">
        <Form.Check
          type='radio'
          label='Male'
          name='gender'
          value='male'
          checked={user.gender === 'male'}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Female'
          name='gender'
          value='female'
          checked={user.gender === 'female'}
          onChange={handleChange}
        />
        <Form.Check
          type='radio'
          label='Others'
          name='gender'
          value='others'
          checked={user.gender === 'others'}
          onChange={handleChange}
        />
      </div>
      <Form.Group controlId="role">
        <Form.Label>Select Role</Form.Label>
        <Form.Control
          as="select"
          name="role"
          value={user.role}
          onChange={handleChange}
          required
        >
          <option value="user">User</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
          <option value="assistant">Assistant</option>
          <option value="CEO">CEO</option>
        </Form.Control>
      </Form.Group>

    <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Enter your password   " 
          name="password" 
          value={user.password} 
          onChange={handleChange} 
          required
        />
        {!isPasswordValid(user.password)&& <p>Password must contain at least one uppercase letter,
             one symbol, one digit, and be at least 8 characters long.'</p>}
      </Form.Group>
      <Form.Group controlId="formConfirmPassword">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="confirm your password" 
          name="confirmPassword" 
          value={user.confirmPassword} 
          onChange={handleChange} 
          required
        />
      </Form.Group>
      <Form.Group controlId="terms">
        <Form.Check 
          type="checkbox" 
          label="I accept the terms and conditions" 
          name="terms" 
          checked={user.terms} 
          onChange={handleChange} 
          custom
          required
        />
      </Form.Group>
      <Button  variant='primary' type='submit'>Submit</Button>
        </Form>
    </div>
  )
}
