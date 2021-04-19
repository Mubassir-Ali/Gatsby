import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
        {/* <h1>Mubassir Ali</h1> */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='projects'>Portfolio Projects</Link>
            
        </nav>
    )
}
