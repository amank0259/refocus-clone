import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const navItems = [
        { id: 0, name: "Home", link: '/' },
        { id: 1, name: "About", link: '/about' },
        { id: 2, name: "Skills", link: '/skills' },
        { id: 3, name: "Projects", link: '/projects' },
        { id: 4, name: "Contact", link: '/contact' },
        // { id: 5, name: "", link: '' },
        { id: 6, name: "News", link: '' }
    ];

    return (
        <div className='max-w-screen-xl mx-auto py-6 flex items-center '>
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="logo" />
            <div className='links flex gap-6 md:gap-14 md:ml-20 ml-4'>
                {navItems.map((item, index) => (
                    item.length === 1 ? <span className='w-1 h-20 bg-zinc-800'></span> : (<Link className='text-sm flex items-center gap-1' key={item.id} to={item.link}>
                        {index === 0 && (<span style={{ boxShadow: "0 0 0.95em #00FF19" }} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>)}
                        {item.name}
                    </Link>)
                ))}
            </div>
        </div>
    )
}

export default Navbar
