import React from 'react'
import './photography.css'
import Image from '../common/Image'

export default function Photography(props) {
    return (
        <div className="section" id={props.pageTitle}>
            <h4 className="pageTitle">{props.pageTitle}</h4>
            <Image img="photography1.png" width="30%" cl="photography1 slide"/>
            <Image img="photography3.png" width="40%" cl="photography3 slide"/>
            <Image img="photography2.png" width="30%" cl="photography2 slide"/>
        </div>
    )
}
