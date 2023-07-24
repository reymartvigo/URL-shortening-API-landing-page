import React from 'react'


import logo from '../images/logo.svg'

const Navbar = ({ openMenu }) => {

    const handleMenuOpen = () => {
        openMenu()
    }
    return (
        <div className="sm:flex sm:items-center sm:justify-between sm:px-4 pt-10 sm:pb-8 sm3:px-10 lg:px-20 lg:gap-10 xl:px-40">
            <div className="w-fit">
                <img src={logo} alt="" aria-hidden="true"></img>
            </div>

            <nav className="sm:hidden lg:flex  lg:w-full lg:justify-between lg:items-center">
                <ul className="lg:flex lg: gap-6 text-sm text-grayishviolet font-bold">
                    <li className="cursor-pointer hover:text-darkviolet">Features</li>
                    <li className="cursor-pointer hover:text-darkviolet">Pricing</li>
                    <li className="cursor-pointer hover:text-darkviolet">Resources</li>
                </ul>

                <div className="lg:flex lg: gap-8">
                    <button className="text-grayishviolet font-bold cursor-pointer outline-none hover:text-darkviolet">Login</button>
                    <button className='lg:py-2 lg:bg-cyan text-white lg:px-6 rounded-full font-semi-bold cursor-pointer outline-none hover:opacity-70'>Sign Up</button>
                </div>
            </nav>

            <button onClick={handleMenuOpen} aria-label="hamburger" className="sm:flex outline-none sm:cursor:pointer lg:hidden">
                <svg width="30" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352" /></svg>
            </button>
        </div>
    )
}

export default Navbar