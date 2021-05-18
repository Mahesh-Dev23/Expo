import React from 'react'

function RoundButton (props) {
    
    const clickHandle =  hide =>  {
        props.passClickedValue(hide) 
        
       
    }
    return (
        <button onClick = {() => clickHandle("false")} className="roundButton">X</button>
    )
}

export default RoundButton
