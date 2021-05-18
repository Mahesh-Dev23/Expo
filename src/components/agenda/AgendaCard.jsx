import React from 'react'
class AgendaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <div>

                </div>
                <div>
                    <h4>{this.props.agendaCardDetails.agenda}</h4>
                    <h5>{this.props.agendaCardDetails.sessionTime}</h5>
                </div>
            </div>
        );
    }
}
 
export default AgendaCard;