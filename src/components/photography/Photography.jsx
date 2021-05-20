import React from 'react'
import './photography.css'

export default function Photography(props) {
    return (
        <div className="section" id={props.pageTitle}>
            <h4 className="pageTitle">{props.pageTitle}</h4>
        </div>
    )
}
