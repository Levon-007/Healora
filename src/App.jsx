import React from 'react'
import './App.css'

import Menubar from './Components/Header/Menubar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Contact from './Pages/Contact/Contact'
import Appointment from './Pages/Appointment/Appointment'
import { Routes,Route } from 'react-router-dom'


export default function App() {
  return (
    <div>
      
      <Menubar/>
      <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='/about' element={ <About/>}></Route>
      <Route path='/service' element={ <Service/>}></Route>
      <Route path='/contact' element={ <Contact/>}></Route>
      <Route path='/appointment' element={<Appointment/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}
