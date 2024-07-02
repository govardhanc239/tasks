import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import LoginForm from '../login-form'
import { Nav, Navbar } from 'react-bootstrap'
import RegistrationForm from '../registration-form'
import Dashboard from '../dashboard'

export default function Navigator1() {
  return (
    <div>
      <Router> 
      <Navbar expand="lg" bg="dark" variant="secondary" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link  ><Link  to="/">Login</Link></Nav.Link>
            <Nav.Link ><Link   to="/register">Register</Link></Nav.Link>
            <Nav.Link  ><Link   to="/dashboard">Dashboard</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
        <Routes>
          <Route path='/' element={<LoginForm/>} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}
