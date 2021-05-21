import React from 'react'
import FeedbackForm from './FeedbackForm'
import './feedback.scss'

function Feedback(props) {
    return (
        <div className="section" id={props.pageTitle}>
            <h4 className="pageTitle">{props.pageTitle}</h4>
            <div className="feedback"><FeedbackForm /></div>
        </div>
    )
}

export default Feedback
