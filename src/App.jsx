// Components
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Form from './components/Form'
import Location from './components/Location'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <FAQ />
      <Testimonials />
      <Form />
      <Location />
      <Footer />
    </>
  )
}

export default App