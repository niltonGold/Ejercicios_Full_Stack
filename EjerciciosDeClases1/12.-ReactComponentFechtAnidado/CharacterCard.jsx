
class CharacterCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ep : ''
        }
    }

    async componentDidMount(){
    const r = await fetch(this.props.primerEpisodioEnAparecer);
         const d = await r.json();
         this.setState({ep:d.name})
         console.log("prueba"+d.name);
    }



    render(){
        return(
            <div className="Card_container">
                <img src={this.props.imagen}/>
                <ul>
                    <li>{ this.props.id }</li>
                    <li>{ this.props.nombre }</li>
                    <li>{ this.props.estado }</li>
                    <li>{ this.props.ultimaLocalizacion }</li>
                    <li>{ this.state.ep }</li>
                </ul>
            </div>
        )
    }
}