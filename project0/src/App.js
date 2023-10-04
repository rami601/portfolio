import React from 'react'
import Hero from './pages/hero/Hero'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Skill from './pages/skills/Skill'
import Projects from './pages/projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
     
      <Skill />
      <Projects />

      
    </div>
  )
}

export default App