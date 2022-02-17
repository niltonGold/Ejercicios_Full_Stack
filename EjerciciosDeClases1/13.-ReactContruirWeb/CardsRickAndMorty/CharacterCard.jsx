
class CharacterCard extends React.Component{
    constructor(props){
        super(props);
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
                    {/* <li>{ this.props.primerEpisodioEnAparecer }</li> */}
                </ul>
            </div>
        )
    }
}