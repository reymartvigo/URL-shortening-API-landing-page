import React from 'react'


import Features from './Features.jsx'

import feature1 from '../images/icon-brand-recognition.svg'


import feature2 from '../images/icon-detailed-records.svg'
import feature3 from '../images/icon-fully-customizable.svg'


const AdvantageSection = () => {
    return (
        <div className=" w-full sm: flex sm: flex-col sm: gap-10 sm:items-center sm: mt-20 lg:px-10 xl:px-30 xl:mb-10">
            <div className="text-center sm: flex sm: flex-col sm:gap-6 sm:px-4  lg:px-40 xl:w-9/12">
                <h1 className="font-bold text-darkviolet text-3xl lg:text-4xl">Advance Statistics</h1>
                <p className="text-grayishviolet tracking-wide lg:leading-8">Track how your links are performing across the web with our advance statistics dashboard.</p>
            </div>


            <div className="sm:flex sm:flex-col sm:gap-28 sm:items-center sm:mt-20  sm:relative z-10 lg:flex-row lg:gap-4">
                <div className="border-2 border-cyan w-2 sm:h-full absolute bg-cyan z-0 lg:h-2 lg:w-full">

                </div>
                <div className="sm:flex sm:flex-col sm:items-center sm:gap-28 lg:flex-row lg:-mt-20 lg:gap-5">
                    <Features
                        image={feature1}
                        header="Brand Recognition"
                        info="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill in you content."
                        marginTop="-10"
                    />

                    <Features
                        image={feature2}
                        header="Detailed Records"
                        info="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision."
                        marginTop="lg:mt-20"
                    />

                    <Features
                        image={feature3}
                        header="Fully Customizable"
                        info="Improve brand awareness and content discoverability through customizable  links, supercharging audience engagement."
                        marginTop="lg:mt-36"
                    />
                </div>
            </div>
        </div>
    )
}

export default AdvantageSection