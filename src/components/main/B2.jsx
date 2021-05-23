import React from 'react'
import Image from '../common/Image'
import Visits from '../common/Visits'

function B2() {
    return (
        <div className="b2" id="Gallery-Button" onClick={()=>Visits("Gallery-Button")}>
            <Image img = "button2.png" id="b2" cl="b2img"/>
        </div>
    )
}

export default B2
