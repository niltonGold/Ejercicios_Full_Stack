
class CharacterCardPokemon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image:''
        }
    }


    async componentDidMount(){
        const r = await fetch(this.props.imagen);
             const d = await r.json();
             this.setState({image:d.sprites.front_default})
             console.log("prueba"+d.name);
        }
    



    render(){
        return(
            <div>
                <img src={this.state.image}/>
                <ul>
                    
                    <li>{ this.props.nombre }</li>
                        
                </ul>
            </div>
        )
    }
}