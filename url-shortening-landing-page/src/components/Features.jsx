import React from 'react'

const Features = ({ image, header, info, marginTop }) => {
    return (


        <div className={`sm:w-11/12 sm:flex sm: h-auto sm:flex-col sm:gap-5 sm:rounded-lg text-white sm: items-center sm: px-7 sm:py-8 bg-white sm:relative z-1 lg:items-start ${marginTop}`} >
            <div className="sm:flex sm:w-24 sm:h-24 sm:items-center sm:justify-center sm: rounded-full bg-darkviolet sm:-mt-20">
                <img className="sm:w-14 sm:h-14" src={image} alt="" aria-hidden='true' loading='lazy'></img>
            </div>
            <h2 className="font-bold text-darkviolet text-2xl">{header}</h2>
            <p className="text-grayishviolet sm:text-center lg:text-left">{info}</p>
        </div >

    )
}

export default Features
