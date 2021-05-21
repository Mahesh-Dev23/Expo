 import React from 'react'
 import Navbar from './Navbar'
 
 function Top(props) {
     const {name, caption } = props.events
     
     
     

     const clickHandle =  (show, modalContentKey) =>  {
        props.showModal(show, modalContentKey)  
    }

    // document.getElementById("agenda-m").addEventListener("click", clickHandle(true, "agenda") )

     return (
         <div>
             <h1>{name}</h1>
             <h3>{caption}</h3>
             <Navbar showModal ={ clickHandle}/>
            
             <button onClick = {() => {clickHandle(true, "user")}}   className="roundButton"> <i class="far fa-user-circle"></i> </button>   
         </div>
     )
 }
 
 export default Top
 