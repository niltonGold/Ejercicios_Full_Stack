


class CityList extends React.Component {

    constructor() {
        super();
        // Son variables de la clase (para poder acceder a ellas en el filterCities), donde voy almacenando
        // los valores del input y del range. No van en el state, en este caso, porque no necesito pintar en el HTML
        // estos valores. Si los necesitase, deben ir state
        this.currentSearchValue = '';
        this.currentPopulationValue = 0;
        this.originalCityList = []; // esta tampoco sería necesaria para el state porque no se pinta
        this.state = {
            cityList: []
        }
    }

    async componentDidMount() {
        const r = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json');
        const cities = await r.json();
        this.originalCityList = cities;
        this.setState({
            cityList: cities
        });
    }

    normalizeCity(cityName){
        return cityName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    filterCities(){
        // filtra mi array original con los valores actuales de los filtros (el valor del input y el valor de el range)
        const filteredCities = this.originalCityList.filter(c => c.population >= this.currentPopulationValue
                                                                      && this.normalizeCity(c.city).includes(this.currentSearchValue));
        this.setState({
            cityList: filteredCities
        });
    }

    filterByName(e){
        this.currentSearchValue = this.normalizeCity(e.target.value);
        this.filterCities();
    }

    filterByPopulation(e){
        this.currentPopulationValue = parseInt(e.target.value);
        this.filterCities();
    }

    render() {
        return (
            <div>
                <input type="text" placeholder='Busca por nombre' onChange={e => this.filterByName(e)}/>
                <input type="range" id="population" name="population" min="0" max="5000000" onChange={e => this.filterByPopulation(e)} />
                <label htmlFor="population">Habitantes</label>
                <ul>
                    {this.state.cityList.map((c, i) => <li key={i}><City name={c.city} population={c.population}></City></li>)}
                </ul>
            </div>
        )
    }
}