import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Hobbies from './sections/Hobbies'
import Contact from './sections/Contact'
import Container from './components/Container'

export default function App() {
  return (
    <main className="font-poppins text-gray-900 bg-white">
      <Container>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
      </Container>
    </main>
  )
}