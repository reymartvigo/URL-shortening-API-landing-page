import React from 'react'


import mobileHero from '../images/illustration-working.svg'
const HeroSection = () => {
    return (
        <div className="sm:flex sm:flex-col sm:h-auto sm:overflow-hidden ">
            <div className="sm:h-80 relative sm:bg-[url('./images/illustration-working.svg')] bg-[length:30rem_100%] bg-no-repeat left-5 z-0">
            </div >

            <div className="sm:flex sm:flex-col sm:gap-5 sm:items-center sm:text-center sm:px-2 sm:py-10">
                <h1 className="font-bold sm:text-4xl sm:tracking-tight sm:leading-snug text-darkviolet">More than just shorter links</h1>
                <p className="text-grayishviolet sm:text-md sm:tracking-wide sm:leading-relaxed">Build your brand's recognition and get detailed insights on how your links are performing</p>
                <button className=" bg-cyan text-white font-bold cursor-pointer outline-none sm:w-1/2 sm:py-3 sm:rounded-full">Get Started</button>
            </div>
        </div >
    )
}

export default HeroSection