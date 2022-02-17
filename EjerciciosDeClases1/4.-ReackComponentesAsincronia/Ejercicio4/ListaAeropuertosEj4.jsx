
class ListaAeropuertosEj4 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            airports:[],
            arrayAirportsModify: []
        };    
    }

    async componentDidMount(){
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json');
        const airportdata = await r.json();
        this.setState({airports: airportdata});
        
    }


    handleSubmit(e){
        e.preventDefault();

        let nombreInput = e.target.nombre.value.toLowerCase();
        let paisInput = e.target.pais.value.toLowerCase();
        let ciudadInput = e.target.ciudad.value.toLowerCase();
        let estadoInput = e.target.estado.value.toLowerCase();
        
        let arraynew = this.state.airports.filter( e2 =>   
                                        (  e2.name.toLowerCase().includes(nombreInput)  )  &&
                                        (  e2.country.toLowerCase().includes(paisInput)  )  &&
                                        (  e2.city.toLowerCase().includes(ciudadInput)  )  &&
                                        (  e2.state.toLowerCase().includes(estadoInput)  )
                                        
                                    ) 

        this.setState({ arrayAirportsModify: arraynew })
        
     }

     
    render(){
        return(
        <React.Fragment>

                <form onSubmit={ e => this.handleSubmit(e) }  className="formulario">
                    <input type="text" id="nombre" />
                    <input type="text" id="pais" />
                    <input type="text" id="ciudad" />
                    <input type="text" id="estado" />
                    <button type="submit">Submit</button>
                </form>
            
                <div>
                {
                    this.state.arrayAirportsModify.map( e => 
                        <AeropuertosComponentEj4
                        
                                key={e.code}
                                name={e.name}
                                contry={e.country}
                                state={e.state}
                                city={e.city}
                                lat={e.lat}
                                lon={e.lon}>

                        </AeropuertosComponentEj4> )
                }
                </div>
        </React.Fragment>
    
        )

    }

}



