import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs'
import Skills from './Skills'
import Contact from './Contact'
import "./globals.css"

function App() {
  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className="min-h-screen">
      <section id="home" className="">
        <Home></Home>
      </section>
      <section id="about" className="h-140">
        <About></About>
      </section>
      <section id="projects">
        <Projects></Projects>
      </section>
      <section id="skills" className="h-screen">
        <Skills></Skills>
      </section>
      <section id="blogs">
        <Blogs></Blogs>
      </section>
      <section id="contact" className="h-screen">
        <Contact></Contact>
      </section>
    </div>
    </>
  );
}

export default App;
