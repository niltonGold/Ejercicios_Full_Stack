
class CityList extends React.Component{

    constructor(){
        super();
        this.state={
            cities2:[],
            citiesModifie:[]    
        };
    }

    async componentDidMount(){
        const response = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json');
        const cities = await response.json();
        this.setState( { cities2:cities , citiesModifie:cities } );
    }

    render(){
        return(
            <React.Fragment>
                <input type="range" id="rango_poblacion" min={0} max={5000000} onChange={ e => 
                    {
                    let rango = e.target.value.toLowerCase();
                    console.log(rango);
                    let arrayCities = [];
                    arrayCities = this.state.cities2.filter( e2 => e2.population > rango );
                    this.setState({ citiesModifie: arrayCities });
                    }    
                }/>
                <div className="div_ciudad_informacion">
                {        
                    this.state.citiesModifie.map(
                        e =>
                        <City
                            key={e.population}
                            nombre={e.city}
                            poblacion={e.population}
                            utf={e.utf}>
                        </City>
                        )
                }        
                </div>
            </React.Fragment>
        )
    }

}