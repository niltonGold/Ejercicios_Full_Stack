
class ListaAeropuertosEj3 extends React.Component {

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
        console.log(this.state.airports)
    }

    render(){
        return(
         <React.Fragment>
            <input type="text" id="aeropuerto_nombre" onChange={ e1 => { 

                        let val = e1.target.value.toLowerCase();
                            
                        let arraynew1 = [];

                        arraynew1 = this.state.airports.filter( e2 =>  e2.city.toLowerCase().includes(val) )
                            
                        this.setState({airports: arraynew1});

                    }  
            }/>
            
            <div>
            {
                this.state.airports.map( e => 
                    <AeropuertosComponentEj3

                            key={e.code}
                            name={e.name}
                            contry={e.conuntry}
                            state={e.state}
                            city={e.city}
                            lat={e.lat}
                            lon={e.lon}>

                    </AeropuertosComponentEj3> )
            }
            </div>
        </React.Fragment>
  
        )
        
    }

}



