import React from 'react'
import Image from '../common/Image'
class AgendaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="col-sm-4 row cardAgenda">
                <div className="col-sm-4">
                    <Image img = {this.props.agendaCardDetails.image}/>
                </div>
                <div className="col-sm-8">
                    <h4>{this.props.agendaCardDetails.agenda}</h4>
                    <h5>{this.props.agendaCardDetails.sessionTime}</h5>
                </div>
            </div>
        );
    }
}
 
export default AgendaCard;