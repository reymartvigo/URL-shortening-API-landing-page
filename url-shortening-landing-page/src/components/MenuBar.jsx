import React from 'react'

const MenuBar = () => {

    return (
        <div className="sm:flex sm:flex-col sm:gap-5 sm:bg-darkviolet sm:px-5 sm:py-10 sm:items-center w-11/12 rounded-xl text-white absolute top-24 left-1/2 right-1/2 -translate-x-1/2 z-20">
            <ul className="sm:items-center sm:flex sm:flex-col sm:gap-8 sm:font-bold sm:text-lg">
                <li className='w-fit cursor-pointer'>Features</li>
                <li className='w-fit cursor-pointer'>Pricing</li>
                <li className='w-fit cursor-pointer'>Resources</li>
            </ul>

            <div className="sm:flex sm:flex-col sm:gap-3 w-full border-t-2 sm:border-grayishviolet sm:pt-6 sm:text-lg">
                <button className='w-full py-3 font-bold outline-none cursor-pointer' aria-label="login">Login</button>
                <button className="bg-cyan w-full py-3 rounded-full font-bold outline-none cursor-pointer" aria-label="sign-up">Sign Up</button>
            </div>
        </div>
    )
}

export default MenuBar