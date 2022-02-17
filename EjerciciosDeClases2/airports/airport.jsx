

class Airport extends React.Component {

    constructor(props){
        super(props);
        // quien me llame me tiene que pasar un objeto airport 
        // con la estructura adecuada
    }

    render(){
        return (
            <div className='airport__container'>
                <p>Name: {this.props.airport.name}</p>
                <p>Country: {this.props.airport.country}</p>
                <p>State: {this.props.airport.state}</p>
                <p>City: {this.props.airport.city}</p>
                <p>Lat: {this.props.airport.lat}, Long: {this.props.airport.lon}</p>
            </div>
        )
    }
}