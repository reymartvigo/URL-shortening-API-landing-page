import React from 'react'


const HeroSection = () => {
    return (
        <div className="sm:flex sm:flex-col sm:h-auto sm:overflow-hidden sm3:px-10  lg:flex-row-reverse lg:items-center lg:pr-0 lg:gap-4 lg:pl-20 lg:py-20 xl:pl-40 xl:gap-0 xl-h-96 ">
            <div className=" sm:h-80 relative sm:bg-[url('./images/illustration-working.svg')] sm:bg-[length:30rem_100%] sm:bg-no-repeat sm2:left-5 z-0 sm3:bg-center md:sm:bg-[length:34rem_100%] lg:w-1/2 lg:h-96 lg:bg-left xl:bg-contain xl:min-h-fit">
            </div >

            <div className="sm:flex sm:flex-col sm:gap-5 sm:items-center sm:text-center sm:px-2 sm:py-10 lg:text-left lg:items-start lg:w-1/2 xl:gap-2  ">
                <h1 className="font-bold sm:text-4xl sm:tracking-tight sm:leading-snug text-darkviolet lg:text-6xl xl:text-7xl xl:tracking-tight">More than just shorter links</h1>
                <p className="text-grayishviolet sm:text-md sm:tracking-wide sm:leading-relaxed xl:text-xl xl:leading-10 xl:tracking-wide xl:pr-10">Build your brand's recognition and get detailed insights on how your links are performing</p>
                <button className="hover:opacity-70 bg-cyan text-white font-bold cursor-pointer outline-none sm:w-1/2 sm:py-3 sm:rounded-full xl:w-40" aria-label="get-started">Get Started</button>
            </div>
        </div >
    )
}

export default HeroSection