 import React from 'react'
 import Navbar from './Navbar'
 function Top(props) {
     const {name, caption } = props.events
     return (
         <div>
             <h1>{name}</h1>
             <h3>{caption}</h3>
             <Navbar />
         </div>
     )
 }
 
 export default Top
 