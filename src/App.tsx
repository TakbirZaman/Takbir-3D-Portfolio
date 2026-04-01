import './App.css'
import Navbar   from './components/Navbar'
import Hero     from './components/sections/Hero'
import About    from './components/sections/About'
import Skills   from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Research from './components/sections/Research'
import Career   from './components/sections/Career'
import Contact  from './components/sections/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
