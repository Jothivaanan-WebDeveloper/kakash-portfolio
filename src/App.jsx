import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
    </>
  )
}

export default App
