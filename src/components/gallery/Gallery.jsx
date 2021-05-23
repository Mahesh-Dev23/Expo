import React from 'react'
import Image from '../common/Image'
import './stall.css'

class Gallery extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() { 
        const stallCard = this.props.stallDetails
        console.log(stallCard)
        return ( 
            <div className="section" id={this.props.pageTitle}>
                <h4 className="pageTitle">{this.props.pageTitle}</h4>
                <div className="stall">
                    {stallCard.map(stall =>
                    <div className="stallCard slide" id={stall.name} onClick={()=> alert(stall.name)}>   
                        <div className="logo"><Image img = {stall.logo} /></div>
                        <h3>{stall.name}</h3>
                        <Image img = {stall.button}/>
                    </div>
                    )}
                </div>
            </div>
         );
    }
}
 
export default Gallery;