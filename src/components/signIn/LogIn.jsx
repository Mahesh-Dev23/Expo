import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import './login.scss'

class Login extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }

    handleSubmit = e =>{
        e.preventDefault()
        this.setState({email:'', password:''})
    }

    handleChange = e =>{
        const[name, value] = e.target.value
        this.setState({[name]: value})
    }
    
    render() { 
        return ( 
            <div className="login p-2">
                <form className="p-2" onSubmit = {this.handleSubmit}>
                    <Input name="email" type="email" value={this.state.email} label = "email" handleChange={this.handleChange} required/>
                    
                    <Input name="password" type="password" value={this.state.password} label = "password" handleChange={this.handleChange} required/>
                    
                    <Button type="submit" >Submit</Button>
                </form>
            </div>

         );
    }
}
 
export default Login;