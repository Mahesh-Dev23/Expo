import React from 'react'
import Image from '../common/Image'
import Visits from '../common/Visits'
function B4() {
    return (
        <div className="b4" id="Auditorium-Button" onClick={()=>Visits("Auditorium-Button")}>
            <Image img = "button4.png" id="b4" cl="b4img"/>
        </div>
    )
}

export default B4
