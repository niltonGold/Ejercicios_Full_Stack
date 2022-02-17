
class AeropuertosComponent extends React.Component{

    constructor (props) {
        super(props);

    }


    render(){
        return (
            //<React.Fragment>
                <div className="div_container">
                    
                    <p>Name: {this.props.name}</p>
                    <p>Country: {this.props.contry}</p>
                    <p>State: {this.props.state}</p>
                    <p>City: {this.props.city}</p>
                    <p>Lat: {this.props.lat}</p>
                    <p>Lon: {this.props.lon}</p>
                    
                </div>    
                
            //</React.Fragment>
                
            
        )

    }

}


