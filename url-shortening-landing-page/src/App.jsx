import { useState } from 'react'

import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar'
import HeroSection from './components/HeroSection'
import LinkShortener from './components/LinkShortener'
import AdvantageSection from './components/AdvantageSection'
function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [link, setLink] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    setLink(e.target.value)
    console.log(e.target.value)
  }

  const handleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <>
      <div className="main w-full h-full relative">

        <Navbar
          openMenu={handleMenuOpen}
        />

        {isMenuOpen && (<MenuBar />)}

        <HeroSection />


        <div className="w-full h-full sm:flex sm:items-center sm:justify-center sm: flex-col sm:gap-6 bg-neutralgray2 sm:mt-40 pb-20">

          <LinkShortener
            link={link}
            handleLink={handleChange}
          />


          <AdvantageSection />
        </div>

        <div className="sm:flex sm: flex-col sm: gap-5 sm:items-center px-4 py-20 text-white bg-darkviolet">
          <h1 className="font-bold text-2xl text-center">Boost your links today</h1>
          <button className="font-bold text-lg px-8 py-2 rounded-full outline-none cursor-pointer bg-cyan">Get Started</button>
        </div>

      </div>
    </>
  )
}

export default App
