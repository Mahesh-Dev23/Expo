import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import './login.scss'
import Image from '../common/Image'
class Login extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName : 'Mahesh',
            email: 'nomahesh@gmail.com',
            password: '123'
        }
    }

    buttonAnimation = (id , interval) =>{
        setInterval(() => {
            document.getElementById(id).className="slide" 
        }, interval);
    }

    handleSubmit = (e, hide, userName) =>{
        e.preventDefault()
        hide = false
        userName = this.state.userName
       // this.setState({email:'', password:''})
       this.props.closeModal(hide)
       this.props.userName(userName)

       this.buttonAnimation("b2", 100,
       this.buttonAnimation("b3", 1500,
       this.buttonAnimation("b4", 3000)))
       
    
        }

    handleChange = e =>{
        const[name, value] = e.target.value
        this.setState({[name]: value})
    }
    
    

    render() { 
        
        return ( 
            <div className="login p-2 slide"  >
                <form className="p-2" onSubmit = {this.state.email && this.state.password ? this.handleSubmit : ''}>
                    <Input name="email" type="email" value={this.state.email} label = "email" handleChange={this.handleChange} required/>
                    
                    <Input name="password" type="password" value={this.state.password} label = "password" handleChange={this.handleChange} required/>
                    
                    <Button type="submit" className="customButton" >Submit</Button>
                </form>
                <Image img = "login.png" cl="loginImage" width="40%"/>
            </div>

         );
    }
}
 
export default Login;