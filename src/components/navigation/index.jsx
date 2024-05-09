import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import RegisterForm from '../registration-form'
import LoginForm from '../login-form'
import Dashboard from '../dashboard'

export default function Navigate() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm/>} /> 
          <Route path='/dashboard' element ={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
