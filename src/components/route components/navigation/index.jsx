import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FetchData from '../fetchdata'
import DisplayData from '../displaydata'

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element ={<FetchData/>}/>
      <Route path='/display' element ={<DisplayData/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
