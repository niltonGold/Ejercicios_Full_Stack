
class CityList extends React.Component{

    constructor(){
        super();

        this.state={
            cities2:[],
            citiesModifites:[]    
        };
    }

    async componentDidMount(){
        const response = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json');
        const cities = await response.json();
        this.setState( { cities2: cities, citiesModifites:cities } );
    }

    render(){
        return(
            <React.Fragment>
                <input type="text" id="introduce_texto" onChange={ e => 
                    {
                    let texto = e.target.value.toLowerCase();
                    console.log(texto);
                    let arrayCities = [];
                    arrayCities = this.state.cities2.filter( e2 => e2.city.toLowerCase().includes(texto) );
                    this.setState({ citiesModifites: arrayCities });
                    }    
                }/>
                <div className="div_ciudad_informacion">
                {        
                    this.state.citiesModifites.map(
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