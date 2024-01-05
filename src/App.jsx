import { Navbar, Hero, About, Profiles, Adoption, Careandhealth, Faqsection, Contactus, Footer } from './components'
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 '>
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Profiles />
        <Adoption />
        <Careandhealth />
        <Faqsection />
        <Contactus />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
