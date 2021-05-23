import React from 'react'

function Visits(visit, time) {
    time = new Date().toString()
    const visitTime = visit + ", " + time
    alert(visitTime)

    return (
        <div className="visitRecord">
            <h6>{visitTime}</h6>
        </div>
    )
}

export default Visits
