import React from 'react'

const Input = ({handleChange, label, ...otherprops}) => (
        <div className="form-group">
            <input className = "form-control" onChange = {handleChange}/>
        </div>
    )


export default Input
