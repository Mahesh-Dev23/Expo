import React, {useContext} from 'react'

import Image from '../common/Image'
import './nav.css'
import {Sections} from '../../App'
function Navbar() {
    const sectionLinks = useContext(Sections)
    console.log(sectionLinks)

    return (
       
        <>
        <nav class="navbar navbar-right">
            <ul class="nav ">
                {sectionLinks.map((value, index) => <li key = {index}><a  href = {`#${value}`}><Image img = {`${value}.png`}/></a></li>)}  
            </ul>
        </nav>    
        </>
    )
}

export default Navbar
