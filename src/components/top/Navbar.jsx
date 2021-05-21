import React, {useContext, useEffect} from 'react'

import Image from '../common/Image'
import './nav.css'
import {Sections} from '../../App'
function Navbar(props) {
    const sectionLinks = useContext(Sections)
    console.log(sectionLinks)

    
    
    const clickHandle =  (show, modalContentKey) =>  {
        modalContentKey === "agenda" ? props.showModal(show, modalContentKey) : props.showModal(false, modalContentKey)
         
    }

    
    //document.getElementById("agenda-m").addEventListner('click', () => {clickHandle(true, "agenda")})
    return (
       
        <>
        <nav class="navbar navbar-right">
            <ul class="nav ">
                {sectionLinks.map((value, index) => <li key = {index} id={ `${value}-m`} onClick = {() => {clickHandle(true, `${value}`)}} ><a  href = {`#${value}`}><Image img = {`${value}.png`}/></a></li>)}  
                {/* {document.getElementById("agenda-m").addEventListener("click", clickHandle(true, "agenda") )} */}
            </ul>
        </nav>    
        </>
    )
}

export default Navbar
