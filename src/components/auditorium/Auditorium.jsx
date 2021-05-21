import React from 'react'
import Video from '../common/Video'
import './auditorium.scss'
import Image from '../common/Image'

function Auditorium(props) {
    return (
        <div className="section" id={props.pageTitle}>
            <div>
                <h4 className="pageTitle">{props.pageTitle}</h4>
                <Video />
                <Image img="audience1.png" width="100%" cl="audience1 slide"/>
                <Image img="audience2.png" width="100%" cl="audience2 slide"/>
            </div>
            
        </div>
    )
}

export default Auditorium
