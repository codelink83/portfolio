import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/navbar/Hero'
import Portfolio from './components/Portfolio'
import Skill from './components/Skill'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [fix, setFix] = useState(false);
  const setfixed = (e) => {
    e.preventDefault();
    if (window.scrollY >= 400) {
      setFix(true)
    } else{
      setFix("")
    }
  }
  window.addEventListener('scroll', setfixed);
  return (
    <>
      <Navbar fix={fix} setFix={setFix} setfixed={setfixed} />
      <Hero/>
      <Portfolio/>
      <Skill/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
