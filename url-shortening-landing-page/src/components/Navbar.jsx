import React from 'react'


import logo from '../images/logo.svg'
import menu from '../images/menu-outline.svg'
const Navbar = ({ openMenu }) => {

    const handleMenuOpen = () => {
        openMenu()
    }
    return (
        <div className="sm:flex sm:items-center sm:justify-between sm:px-4 pt-8 sm:pb-2">
            <div className="w-fit">
                <img src={logo} alt="" aria-hidden="true"></img>
            </div>

            <button onClick={handleMenuOpen} aria-label="hamburger" className="sm:flex outline-none sm:cursor:pointer">
                <svg width="30" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352" /></svg>
            </button>
        </div>
    )
}

export default Navbar