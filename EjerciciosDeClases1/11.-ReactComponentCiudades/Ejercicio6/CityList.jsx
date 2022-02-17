
class CityList extends React.Component{

    constructor(){
        super();
        this.state={
            cities:[]    
        };
    }

    async componentDidMount(){
        const response = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json');
        const cities = await response.json();
        this.setState( { cities } );
    }

    render(){
        return(
            <div className="div_ciudad_informacion">
            {        
                this.state.cities.map(
                    e =>
                      <City
                        nombre={e.city}
                        poblacion={e.population}
                        utf={e.utf}>
                      </City>
                    )
            }        
            </div>
        )
    }

}