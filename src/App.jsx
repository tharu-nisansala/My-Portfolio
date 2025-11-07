import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Qualification from './sections/Qualification'
import Blogs from './sections/Blogs'

function App() {
  

  return (
    <div className="pt-15">
      <Navbar/>
      <Hero/>
      <About/>
      <Qualification/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
