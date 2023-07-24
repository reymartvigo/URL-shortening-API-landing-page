import { useState } from 'react'

import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar'
import HeroSection from './components/HeroSection'
import LinkShortener from './components/LinkShortener'
import AdvantageSection from './components/AdvantageSection'
import Footer from './components/Footer';

import boost1 from '../src/images/bg-boost-mobile.svg'
import boost2 from '../src/images/bg-boost-desktop.svg'
function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

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


        <div className="w-full h-full sm:flex sm:items-center sm:justify-center sm: flex-col sm:gap-6 bg-neutralgray2 sm:mt-40 pb-20 sm3:px-10 md:px-16 xl:px-32">

          <LinkShortener

          />

          <AdvantageSection />
        </div>

        <div className="sm:flex sm: flex-col sm: gap-5 sm:items-center px-4 py-20 text-white bg-darkviolet relative  z-10">
          <div className="absolute w-full sm:h-full z-0 top-0">
            <img className="absolute right-0 h-full lg:hidden " src={boost1}></img>
            <img className="absolute right-0 h-full sm:hidden  lg:flex lg:w-full" src={boost2}></img>
          </div>
          <div className="sm:flex sm:flex-col gap-8 z-10 sm:items-center ">
            <h1 className="font-bold text-2xl text-center lg:text-4xl tracking-wide">Boost your links today</h1>
            <button className="font-bold text-lg px-8 py-3 rounded-full outline-none cursor-pointer bg-cyan sm:w-10/12 lg:w-60 hover:opacity-70">Get Started</button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
