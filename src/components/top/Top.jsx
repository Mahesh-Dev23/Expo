 import React from 'react'
 import Navbar from './Navbar'
 
 function Top(props) {
     const {name, caption } = props.events
     
     

     const clickHandle =  show =>  {
        props.showModal(show) 
          
    }
     return (
         <div>
             <h1>{name}</h1>
             <h3>{caption}</h3>
             <Navbar />
            
             <button onClick = {() => {clickHandle(true)}}   className="roundButton"> <i class="far fa-user-circle"></i> </button>   
         </div>
     )
 }
 
 export default Top
 