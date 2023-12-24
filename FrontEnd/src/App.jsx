import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import TechStack from './Components/TechStack'
import Project from './Components/Project'
function App() {
  return (
    <>
      <NavBar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer className="dark:text-white bg-black" />
    </>
  )
}

export default App
