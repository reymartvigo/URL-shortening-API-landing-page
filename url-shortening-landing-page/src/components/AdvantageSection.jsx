import React from 'react'


import Features from './Features.jsx'

import feature1 from '../images/icon-brand-recognition.svg'


import feature2 from '../images/icon-detailed-records.svg'
import feature3 from '../images/icon-fully-customizable.svg'


const AdvantageSection = () => {
    return (
        <div className=" w-full sm: flex sm: flex-col sm: gap-10 sm:items-center sm: mt-14">
            <div className="text-center sm: flex sm: flex-col sm:gap-6 sm:px-4">
                <h1 className="font-bold text-darkviolet text-3xl">Advance Statistics</h1>
                <p className="text-grayishviolet tracking-wide">Track how your links are performing across the web with out advance statistics dashboard.</p>
            </div>


            <div className="sm:flex sm:flex-col sm:gap-28 sm:items-center sm:mt-20  sm:relative z-10">
                <div className="border-2 border-cyan w-2 sm:h-full absolute bg-cyan z-0">

                </div>
                <Features
                    image={feature1}
                    header="Brand Recognition"
                    info="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill in you content."
                />

                <Features
                    image={feature2}
                    header="Detailed Records"
                    info="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision."
                />

                <Features
                    image={feature3}
                    header="Fully Customizable"
                    info="Improve brand awareness and content discoverability through customizable  links, supercharging audience engagement."
                />

            </div>
        </div>
    )
}

export default AdvantageSection