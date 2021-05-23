import React from 'react'

function Image( props) {
    return (
        <img key= {props.img} src = {`img/${props.img}`} alt = {props.img} width={props.width} className={props.cl} id={props.id}/>
    )
}

export default Image
