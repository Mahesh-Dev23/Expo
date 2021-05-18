import React from 'react'
import B1 from './B1'
import B2 from './B2'
import B3 from './B3'
import B4 from './B4'
import Top from '../top/Top'
import './main.css'

function Main(props) {
    return (
        <div className="section">
            <Top events = { props.events} val = {props.val}/>
            <div className="main">
                <B1 />
                <B2 />
                <B3 />
                <B4 />
            </div>
            
        </div>
    )
}

export default Main
