import { Link } from 'gatsby'
import React from 'react'
import * as styles from  './Header.module.css'




export default function Header() {
    return (
        <header className={styles.header} >
            <h1>Mubassir</h1>        
            <ul >
               <li><Link to='/' > Home</Link></li>
               <li><Link to='/contact' > Contact</Link></li>
               <li><Link to='/about' > About Us</Link></li>
                <li><Link to='/Projects' >Projects</Link></li>
            </ul>      
        </header>
    )
}
