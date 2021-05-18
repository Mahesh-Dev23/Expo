import React from 'react'
import Input from '../common/Input'
import './login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    
    render() { 
        return ( 
            <div className="login p-2">
                <form className="p-2" >
                    <Input />
                    <Input />
                </form>
            </div>

         );
    }
}
 
export default Login;