import { Link } from 'gatsby'
import React from 'react'

export default function Header() {
    return (
        <header>
        <h1>Mubassir</h1>
        <nav>
            <ul>
               <li><Link to='/'> Home</Link></li>
               <li><Link to='/contact'> Contact</Link></li>
               <li><Link to='/about'> About Us</Link></li>
            <li><Link to='blog'>Blog</Link></li>
            </ul>
        </nav>

            
        </header>
    )
}
