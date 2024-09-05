import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='px-5 md:px-28 lg:px-40'>
        <Hero />
      </div>
        <Footer />
    </div>
  )
}

export default App
