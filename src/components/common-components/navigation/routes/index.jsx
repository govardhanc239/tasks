import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import { Nav,Navbar,Container } from 'react-bootstrap'
import Home from '../../home'
import LayOut from '../layout'
import About from '../../about'
import Contact from '../../contact'
import NoPageFound from '../../nopagefund';
export default function Navigator() {
  return (
    <div>
      <BrowserRouter>
      <Navbar expand="lg" bg='grey' data-bs-theme = "dark"  className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">MT-Router</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link  ><Link  to="/home">Home</Link></Nav.Link>
            <Nav.Link ><Link   to="/about">About</Link></Nav.Link>
            <Nav.Link  ><Link   to="/contact">Contact</Link></Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
       <Routes>
        <Route path='/' element ={<LayOut/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path= '*' element ={<NoPageFound/>}/>
       </Routes>

      </BrowserRouter>
    </div>
  )
}
