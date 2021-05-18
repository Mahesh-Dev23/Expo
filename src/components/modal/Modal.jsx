import React from 'react'
import './modal.css'


class Modal extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            show: '' 
        }
    }
    
    componentDidMount(){
        
    }

    
      
    clickHandle =  hide =>  {
        this.props.closeModal(hide) 
        
       
    }

    componentWillUnmount(){
        alert("closing")
        
    }
    
    render() { 
        
        
        return (  
            <div className="modalNew d-flex flex-wrap align-content-center">
                <button onClick = {() => this.clickHandle(false)}   className="roundButton">X </button>
                {this.props.children}
            </div>
        );
    }
}
 
export default Modal;