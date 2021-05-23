import './App.css';
import './glass.css'
import './animations.css'
import Data from './Data.json'


import React from 'react'
import Main from './components/main/Main'
import Modal from './components/modal/Modal'
import Agenda from './components/agenda/Agenda'
import LogIn from './components/signIn/LogIn'
import Gallery from './components/gallery/Gallery'
import Network from './components/network/Network'
import Auditorium from './components/auditorium/Auditorium'
import Photography from './components/photography/Photography'
import Feedback from './components/feedback/Feedback'
import Games from './components/entertainment/Games'
import User from './components/user/User'
import FeedbackForm from './components/feedback/FeedbackForm'
import StallPop from './components/gallery/StallPop'
import Visits from './components/common/Visits'

export const Sections = React.createContext()
export const UserInitial = React.createContext()

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userName: '',
      show: true,
      modalContentKey: "login",
      eventDetails: Data[0],
      section: Data[1],
      sponsor: Data[2],
      agenda: Data[3],
      gallery: Data[4],
      network: Data[5]
       
    }
  }

  componentDidMount(){
    this.setState({userName: <i class="far fa-user-circle"></i>})
    // document.getElementById("b2").className="b2 slide" 
  }
  
  getClickedValue = (show, modalContentKey) => { alert(modalContentKey)
    this.setState({show: show, modalContentKey: modalContentKey})
  }
  
  getUserName = loggeduserName => {this.setState({userName:loggeduserName})}
    
  render() {
    //creating constants of maodal contents
    alert(`App user: ${this.state.userName}`)
    const agenda = <Agenda agendaDetails={this.state.agenda.agenda} pageTitle = {this.state.section.sections[1]}/>
    const login = <LogIn closeModal = { this.getClickedValue} userName ={this.getUserName}/>
    const user = <User />
    const feedback = <FeedbackForm />
    const stallPop = <StallPop />

    //appending modal content as per button clicked
    const modalContent = this.state.modalContentKey === "agenda" ? agenda : 
    this.state.modalContentKey === "user" ?   user :
    this.state.modalContentKey === "feedback" ?   feedback :
    this.state.modalContentKey === "stallPop" ?  stallPop : login 
    

    //user initital for top right place
    let userInitialLetter = this.state.userName
    
    
    //alert(modalContent)
    return (
      <div className="container-fluid">
        
       <Sections.Provider value = {this.state.section.sections} > 
        <UserInitial.Provider value = {userInitialLetter}>
          <Main events = { this.state.eventDetails.events[0]} val = {this.state.section} pageTitle = {this.state.section.sections[0]} showModalApp = { this.getClickedValue}/> 
        </UserInitial.Provider>
       </Sections.Provider>
       <Gallery stallDetails = {this.state.gallery.stall} pageTitle = {this.state.section.sections[2]}/>
       <Auditorium pageTitle = {this.state.section.sections[3]}/>
       <Network boothDetails = {this.state.network.network} pageTitle = {this.state.section.sections[4]}/>
       <Photography pageTitle = {this.state.section.sections[5]} />
       <Feedback pageTitle = {this.state.section.sections[6]}/>
       <Games pageTitle = {this.state.section.sections[7]}/>
        
       { this.state.show ? <Modal closeModal = { this.getClickedValue}>{modalContent}</Modal> : ''}

       <Visits />
        
      </div>
    )
  }
}

export default App
