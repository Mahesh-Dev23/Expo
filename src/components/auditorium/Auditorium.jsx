import React from 'react'

function Auditorium(props) {
    return (
        <div className="section" id={props.pageTitle}>
            <div>
            <h4 className="pageTitle">{props.pageTitle}</h4>
            </div>
            
        </div>
    )
}

export default Auditorium
