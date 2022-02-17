
class ListaAeropuertosEj2 extends React.Component {

    constructor(){
        super();
        this.state = {
            airports:[]
        };    
    }


    async componentDidMount(){
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json');
        const airports = await r.json();
        this.setState({airports});
    }



    render(){
        return(
            <div>
            {
                this.state.airports.map( 
                    e => <AeropuertosComponentEj2
                    
                            key={e.code}

                            name={e.name}
                            contry={e.conuntry}
                            state={e.state}
                            city={e.city}
                            lat={e.lat}
                            lon={e.lon}
                        >

                        </AeropuertosComponentEj2> )
            }
            </div>

            
        )
    }



}



