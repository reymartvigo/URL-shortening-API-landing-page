import React from 'react'

import ShortenedLink from './ShortenedLink'
const LinkShortener = ({ handleLink, handleSubmitLink, link }) => {



    const handleChange = (e) => {
        handleLink(e)
    }



    return (
        <>
            <div className="sm:w-11/12 bg-darkviolet rounded-lg sm:-mt-20">
                <form action="" className="form sm:flex sm:flex-col sm: gap-4 sm:px-6 sm:py-6" id="form">
                    <div className="sm:w-full">
                        <input className="sm:w-full sm:py-4 sm:px-4 rounded-lg outline-none" type='text' placeholder="Shorten a link here..." value={link} onChange={handleChange}></input>
                        <span className="text-secondaryred italic sm: text-sm hidden">please add a link</span>
                    </div>
                    <button className="sm:py-4 sm:px-4 rounded-lg bg-cyan text-white font-bold text-lg outline-none">Shorten It!</button>
                </form>

            </div>

            <ShortenedLink />

        </>
    )
}

export default LinkShortener