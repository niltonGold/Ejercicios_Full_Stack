
class CardList extends React.Component{
    constructor(){
        super();

        this.state = {
            CardsOriginal :[],
            CardsListCopi:[]
        };

        

    }

    async componentDidMount(){

        let aleatorio = (Math.floor(Math.random()*672)).toString();
        
        const response = await fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`);
        const data = await response.json();
        console.log(data);
        this.setState( { CardsOriginal: data, CardsListCopi: data } );
        
    }



    render(){
        return(
            <React.Fragment>
                                        <CharacterCard
                                            imagen={this.state.CardsOriginal.image}
                                            key={this.state.CardsOriginal.id}
                                            nombre={this.state.CardsOriginal.name}
                                           
                                        ></CharacterCard>
                                        

            </React.Fragment>


        )
    }

}
