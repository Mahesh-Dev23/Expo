import React from 'react'
import Image from '../common/Image'

function B1() {
    return (
        <div className="b1">
            <Image img = "logo-animation1.png"/>
        </div>
    )
}

export default React.memo(B1)
