import React from 'react'

function Games(props) {
    return (
        <div className="section" id={props.pageTitle}>
            <h4 className="pageTitle">{props.pageTitle}</h4>
        </div>
    )
}

export default Games
