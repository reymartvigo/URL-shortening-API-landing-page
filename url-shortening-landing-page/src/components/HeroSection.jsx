import React from 'react'


import mobileHero from '../images/illustration-working.svg'
const HeroSection = () => {
    return (
        <div className="sm:flex sm:flex-col sm:h-96 border-2 border-r-secondaryred">
            <div className="border-2 border-r-secondaryred h-full relative" >
                <img className="w-96 absolute top-2" src={mobileHero} />
            </div >
        </div >
    )
}

export default HeroSection