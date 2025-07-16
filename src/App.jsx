import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import "./globals.css"

function App() {
  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className="min-h-screen p-4">
      <section id="home" className="h-screen">
        <Home></Home>
      </section>
      <section id="about" className="h-screen">
        <About></About>
      </section>
      <section id="projects" className="h-screen">
        <Projects></Projects>
      </section>
      <section id="skills" className="h-screen">
        <Skills></Skills>
      </section>
      <section id="contact" className="h-screen">
        <Contact></Contact>
      </section>
    </div>
    </>
  );
}

export default App;
