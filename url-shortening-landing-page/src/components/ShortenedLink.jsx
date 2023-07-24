import React, { useState } from 'react'

const ShortenedLink = ({ link, shortenedLink }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyShortenedLink = () => {

        navigator.clipboard.writeText(shortenedLink).then(() => {
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false)
            }, 1500)

        }).catch((error) => {
            console.error('Failed to copy', error)
        })

    }
    return (
        <div className="sm:flex sm:flex-col sm:gap-4 sm:w-11/12 sm:items-center py-6 rounded-lg bg-white lg:flex-row lg:px-6 lg:py-4">
            <span className="border-b-2 border-neutralgray sm:px-4 sm:w-full sm:text-lg sm:pb-4 lg:border-none lg:pb-0 lg:px-0">{link}</span>
            <div className="lg:px-0 lg:gap-8  lg:flex-row lg:justify-end lg:items-center sm:flex sm:flex-col w-full sm:items-start sm:px-4 sm:gap-3 ">
                <a href={shortenedLink} target="_blank" rel="noopener noreferrer" className="  text-cyan sm:w-fit sm:text-lg" >{shortenedLink}</a>
                <button onClick={handleCopyShortenedLink} aria-lable="copy" className={`text-center sm:w-full sm:py-3 sm:rounded-xl text-white font-bold text-lg outline-none lg:rounded-lg lg:w-24 hover:opacity-70 ${isCopied ? 'bg-verydarkviolet' : 'bg-cyan'}`} > {isCopied ? 'Copied!' : 'Copy'}</button>
            </div>
        </div >
    )
}

export default ShortenedLink