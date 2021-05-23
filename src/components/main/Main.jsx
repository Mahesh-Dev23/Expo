import React, {useContext, useEffect} from 'react'
import B1 from './B1'
import B2 from './B2'
import B3 from './B3'
import B4 from './B4'
import Top from '../top/Top'
import './main.css'

import {UserInitial} from '../../App'

function Main(props) {
    
    const userForInitial = useContext(UserInitial)
    console.log(userForInitial)
     
    useEffect(() => {
        

    })
    
    const showModalApp = (show, modalContentKey) =>{
        props.showModalApp(show, modalContentKey)
        
    }

    // useState ???
    
    console.log("main")
    return (
       
        <div className="section" id={props.pageTitle}>
            <Top events = { props.events} val = {props.val} userInitial = { userForInitial} showModal = {showModalApp}/>
            <div className="main" >
                <B1 key="b1"/>
                <B2 key="b2"/>
                <B3 key="b3"/>
                <B4 key="b4"/>
                
            </div>
            
        </div>
    )
}

export default Main
