import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/services'
import Projects from './Components/projects/projects'
import Contact from './Components/Contact/contact'
import Footer from './Components/footer/footer'
const App = () => {
  return (
    <div>
     <Navbar/> 
     <Hero/>
     <About/>
     <Services/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
