import React from 'react'

const ShortenedLink = () => {
    return (
        <div className="sm:flex sm:flex-col sm:gap-4 sm:w-11/12 sm:items-center py-6 rounded-lg bg-white">
            <span className="border-b-2 border-neutralgray sm:px-4  font-bold sm:w-full sm:text-lg pb-4 ">https://react-todoapplication/</span>
            <span className="sm:px-4  text-cyan font-bold sm:w-full sm:text-lg">Shorten link</span>
            <button className="bg-cyan w-11/12 sm:py-2 rounded-xl text-white font-bold text-lg">Copy</button>
        </div>
    )
}

export default ShortenedLink