import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'
import Cart from './pages/Cart.js'
import Navbar from './components/Navbar.js'
import "./index.css"

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />          
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </div>
  )
}

export default App