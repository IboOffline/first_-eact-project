import Hero from './sections/hero'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/project'
import Hobbies from './sections/hobbies'
import Contact from './sections/contact'
import Container from './components/container'

export default function App() {
  return (
    <main className="font-poppins text-gray-900 bg-white min-h-screen w-full">
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