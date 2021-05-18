import React from 'react'
import AgendaCard from './AgendaCard'

class Agenda extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() { 
        const agendaCard = this.props.agendaDetails
        return ( 
            <div className="login p-2">
                <h4>This is agenda!</h4>
                {agendaCard.map(agenda => <AgendaCard agendaCardDetails ={agenda} />)}
            </div>
         );
    }
}
 
export default Agenda;