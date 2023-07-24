import React, { useState, useEffect } from 'react'
import ShortenedLink from './ShortenedLink'


import background1 from '../images/bg-shorten-mobile.svg'
import background2 from '../images/bg-shorten-desktop.svg'
const LinkShortener = () => {

    const [link, setLink] = useState('')
    const [error, setError] = useState(false);
    const [shortenedLinks, setShortenedLinks] = useState([])

    const saveToLocalStorage = (links) => {
        localStorage.setItem('shortenedLinks', JSON.stringify(links));
    }

    const getFromLocalStorage = () => {
        const savedLinks = localStorage.getItem('shortenedLinks')
        return savedLinks ? JSON.parse(savedLinks) : []
    }

    useEffect(() => {
        const storedLinks = getFromLocalStorage()
        setShortenedLinks(storedLinks)
    }, [])
    const handleChange = (e) => {
        const value = e.target.value
        setLink(value)
        setError(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (link.trim() === '') {
            setError(true)
            return;
        }


        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
            const data = await response.json();

            if (data.ok) {

                const newShortenedLink = {
                    originalLink: link,
                    shortenedLink: data.result.full_short_link,
                }

                setShortenedLinks((prevShortenedLink) => [...prevShortenedLink, newShortenedLink]);
                setLink('')
                saveToLocalStorage([...shortenedLinks, newShortenedLink])
            } else {
                setError(true);

            };


        } catch (error) {
            setError(true);

        }
    }






    return (
        <>
            <div className="sm:w-11/12 bg-darkviolet rounded-xl sm:-mt-20 bg relative z-10 ">
                <div className="absolute w-full sm:h-full z-0 ">
                    <img className="absolute right-0 h-full lg:hidden rounded-xl" src={background1}></img>
                    <img className="absolute right-0 h-full sm:hidden rounded-xl lg:flex lg:w-full" src={background2}></img>
                </div>
                <form onSubmit={handleSubmit} action="" className="sm:flex sm:flex-col sm: gap-4 sm:px-6 sm:py-6 relative z-10 lg:flex-row lg:items-start lg:py-10 lg:px-10" id="form">
                    <div className="sm:w-full">
                        <input className={`sm:w-full sm:py-4 sm:px-6 rounded-lg outline-none ${error ? 'border-secondaryred border-2 placeholder:text-secondaryred' : 'border-none placeholder:text-grayishviolet'}`}
                            type='text'
                            placeholder="Shorten a link here..."
                            value={link}
                            onChange={handleChange}>
                        </input>
                        {error && <span className="text-secondaryred italic sm: text-sm ">please add a link</span>}
                    </div>
                    <button className="sm:py-3.5 sm:px-3 rounded-lg bg-cyan text-white font-bold sm:text-xl outline-none tracking-wide lg:w-1/4 hover:opacity-70" aria-label="shorten-link">Shorten It!</button>

                </form >

            </div >


            {shortenedLinks.map((shortenLink, index) => (

                <ShortenedLink
                    key={index}
                    link={shortenLink.originalLink}
                    shortenedLink={shortenLink.shortenedLink}
                />
            ))
            }

        </>
    )
}

export default LinkShortener