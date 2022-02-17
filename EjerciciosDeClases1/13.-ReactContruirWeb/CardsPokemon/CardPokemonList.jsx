
class CardPokemonList extends React.Component{
    constructor(){
        super();

        this.state = {
            CardsOriginal :[],
            CardsListCopi:[],
            k:''
        };

        

    }

    // async componentDidMount(){

    //     let aleatorio = (Math.floor(Math.random()*150)).toString();
        
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${aleatorio}`);
    //     const data = await response.json();
    //     //console.log(data);
    //     this.setState( { CardsOriginal: data, CardsListCopi: data } );
    //     console.log(this.state.CardsListCopi.sprites.front_default);
    //     this.setState({k: this.state.CardsListCopi.sprites.front_default})
    // }


    async componentDidMount(){






        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=1&limit=3`);
        const data = await response.json();
        console.log("1"+data.results);
        this.setState( { CardsOriginal: data.results } );
        


    }


    render(){
        return(
            <React.Fragment>
              
            <div>
                {
                    this.state.CardsOriginal.map( (e,i) =>
               <CharacterCardPokemon
                    
                    key={i}
                    imagen={e.url}
                    nombre={e.name}
                                            
               ></CharacterCardPokemon>
                    )
                }
            </div> 

            </React.Fragment>
                 
            

        )
    }





    // render(){
    //     return(
    //         <React.Fragment>
              
               
    //            <CharacterCardPokemon
                    
    //                 imagen={this.state.k}
                    

    //                 nombre={this.state.CardsOriginal.name}
                                            
    //            ></CharacterCardPokemon>
              
               
    //         </React.Fragment>
            

    //     )
    // }





}
