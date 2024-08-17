import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import HeroSection from './Component/HeroSection/HeroSection'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Contact from './Component/Contact/Contact'
import Project from './Component/Project/Project'
import Resume from './Component/Resume/Resume'
import ScrollTop from './Component/ScrolTop/ScrollTop'
import About from './Component/About/About'

function App() {
  return (
    <div>
    <BrowserRouter>
    <ScrollTop/>
     <Navbar/>
     
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path = '/projects' element = {<Project/>}/>
        <Route path='/resume' element = {<Resume/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
      
      <Footer/>
      
    </BrowserRouter>
    </div>
  )
}

export default App