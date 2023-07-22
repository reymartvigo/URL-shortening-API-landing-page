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
        <div className="sm:flex sm:flex-col sm:gap-4 sm:w-11/12 sm:items-center py-6 rounded-lg bg-white">
            <span className="border-b-2 border-neutralgray sm:px-4 sm:w-full sm:text-lg pb-4 ">{link}</span>
            <a href={shortenedLink} target="_blank" rel="noopener noreferrer" className="sm:px-4  text-cyan sm:w-full sm:text-lg" >{shortenedLink}</a>
            <button onClick={handleCopyShortenedLink} aria-lable="copy" className={`w-11/12 sm:py-3 rounded-xl text-white font-bold text-lg outline-none ${isCopied ? 'bg-verydarkviolet' : 'bg-cyan'}`} > {isCopied ? 'Copied' : 'Copy'}</button>
        </div >
    )
}

export default ShortenedLink