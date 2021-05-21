import React from 'react'

const Button = ({children, ...otherprops}) => (
        <button  className = "custom-button" {...otherprops}>{children}</button>
    )


export default Button
