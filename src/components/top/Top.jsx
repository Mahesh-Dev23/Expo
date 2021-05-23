 import React from 'react'
 import Navbar from './Navbar'

 
 function Top(props) {
     const {name, caption } = props.events
     const userInitial = props.userInitial
     alert(userInitial)
     const clickHandle =  (show, modalContentKey) =>  {
        props.showModal(show, modalContentKey)  
    }

    
     return (
         <div>
             <h1>{name}</h1>
             <h3>{caption}</h3>
             <Navbar showModal ={ clickHandle}/>
            
             <button onClick = {() => {clickHandle(true, "user")}}   className="roundButton"> {userInitial ? userInitial[0] : <i class="far fa-user-circle"></i>} </button>   
         </div>
     )
 }
 
 export default Top
 