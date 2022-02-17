

class AirportList extends React.Component {

    constructor(){
        super();
        this.state = {
            airports: []
        }
    }

    async componentDidMount(){
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
        const airports = await r.json();
        const newState = {
            airports
        }
        this.setState(newState);
        // ya tengo la lista de aeropuertos
    }

    render(){
        return(
            <div>
                {/* Pinta tantos Componentes Airport como aeropuertos me devuelva el servidor*/}
               { this.state.airports.map(a => <Airport key={a.code} airport={a}></Airport>) }
            </div>
        )
    }
}