import './App.css';
import './glass.css'
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

export const Sections = React.createContext()

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
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

  
  getClickedValue = (show, modalContentKey) => { alert(modalContentKey)
    this.setState({show: show, modalContentKey: modalContentKey})
  }
    
    
  render() {
    //creating constants of maodal contents
    const agenda = <Agenda agendaDetails={this.state.agenda.agenda} pageTitle = {this.state.section.sections[1]}/>
    const login = <LogIn />
    const user = <User />
    const feedback = <FeedbackForm />
    const stallPop = <StallPop />

    //appending modal content as per button clicked
    const modalContent = this.state.modalContentKey === "agenda" ? agenda : 
    this.state.modalContentKey === "user" ?   user :
    this.state.modalContentKey === "feedback" ?   feedback :
    this.state.modalContentKey === "stallPop" ?  stallPop : login 
    

    //if there is no modal content the modal should not open
    
    
    //alert(modalContent)
    return (
      <div className="container-fluid">
        
       <Sections.Provider value = {this.state.section.sections}> 
        <Main events = { this.state.eventDetails.events[0]} val = {this.state.section} pageTitle = {this.state.section.sections[0]} showModalApp = { this.getClickedValue}/> 
       </Sections.Provider>
       <Gallery stallDetails = {this.state.gallery.stall} pageTitle = {this.state.section.sections[2]}/>
       <Auditorium pageTitle = {this.state.section.sections[3]}/>
       <Network boothDetails = {this.state.network.network} pageTitle = {this.state.section.sections[4]}/>
       <Photography pageTitle = {this.state.section.sections[5]} />
       <Feedback pageTitle = {this.state.section.sections[6]}/>
       <Games pageTitle = {this.state.section.sections[7]}/>
        
       { this.state.show ? <Modal closeModal = { this.getClickedValue}>{modalContent}</Modal> : ''}
        
      </div>
    )
  }
}

export default App
