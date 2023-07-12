import { useState } from 'react'

import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar'
import HeroSection from './components/HeroSection'
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
      </div>
    </>
  )
}

export default App
