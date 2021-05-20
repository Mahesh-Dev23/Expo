import React from 'react'
import AgendaCard from './AgendaCard'
import './agenda.css'

class Agenda extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() { 
        const agendaCard = this.props.agendaDetails
        return ( 
            < >
                <h4 className="pageTitle">{this.props.pageTitle}</h4>
                <div className="agenda  row " >{agendaCard.map(agenda => <AgendaCard agendaCardDetails ={agenda} />)}</div>
            </>
         );
    }
}
 
export default Agenda;