import React from 'react'

const Input = ({handleChange, label, ...otherprops}) => (
        <div className="form-group">
            <input className = "form-input" onChange = {handleChange} {...otherprops}/>
            {
                label ? 
                (<label className={`${
                    otherprops.value.length ? 'shrink' : ''} 
                    form-input-label`}
                    >
                    {label}
                </label>)
                : null }
        </div>
    )


export default Input
