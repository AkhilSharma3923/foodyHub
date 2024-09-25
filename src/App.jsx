import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Review from './components/Review'
import Choose from './components/Choose'
import Items from './components/Items'
import Newletter from './components/Newletter'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Items />
      <Service />
      <Choose />
      <Review />
      <Newletter />
      <Footer />
    </div>
  )
}

export default App
