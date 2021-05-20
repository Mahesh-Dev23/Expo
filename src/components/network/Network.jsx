import React from 'react'
import Image from '../common/Image'
import './network.css'

function Network(props) {
    const boothCard = props.boothDetails
    return (
        <div className="section" id={props.pageTitle}>
            <h4 className="pageTitle">{props.pageTitle}</h4>
            <div className="network">
                {boothCard.map(booth =>
                 <div className="networkCard">   
                    <div className="logo"><Image img = {booth.logo} /></div>
                    <h3>{booth.booth}</h3>
                    <Image img = {booth.button}/>
                </div>
                )}
            </div>
        </div>    
        
    )
}

export default Network
