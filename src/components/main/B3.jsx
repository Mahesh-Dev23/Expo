import React from 'react'
import Image from '../common/Image'
import Visits from '../common/Visits'
function B3() {
    return (
        <div className="b3" id="Network-Button" onClick={()=>Visits("Network-Button")} >
            <Image img = "button3.png" id="b3" cl="b3img"/>
        </div>
    )
}

export default B3
