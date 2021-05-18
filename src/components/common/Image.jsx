import React from 'react'

function Image( props) {
    return (
        <img key= {props.img} src = {`img/${props.img}`} alt = {props.img}/>
    )
}

export default Image
