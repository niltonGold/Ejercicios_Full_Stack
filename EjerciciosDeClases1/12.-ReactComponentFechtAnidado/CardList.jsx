
class CardList extends React.Component{
    constructor(){
        super();

        this.state = {
            CardsListOriginal :[],
            CardsListCopi:[],
            
        };

        

    }

    
    
    async componentDidMount(){
        console.log("hola1");
        let arr = []   
        for(let i=1; i<672; i++){
            arr.push( i );
        }
        
        const response = await fetch(`https://rickandmortyapi.com/api/character/${arr}`);
        const data = await response.json();
        this.setState( { CardsListOriginal: data, CardsListCopi: data } );
        console.log(this.state.CardsListOriginal)
        console.log(this.state.CardsListOriginal )
        // this.state.CardsListCopi.forEach( e1 => {
           
        //    console.log(e1.episode)
        //    e1 = e1.episode.forEach( e2 => 
        //        console.log(e2)
        //    ) 
        //    console.log('---');
        // }
        
        
        // );

        // let episode = this.state.CardsListCopi[0].episode[1];

        // console.log('123--'+episode);

        //console.log(this.state.CardsListCopi[0].episode[0]);
         
    }



    render(){
        return(
            <React.Fragment>
                <div>
                {
                    this.state.CardsListCopi.map(
                        e =>
                        <CharacterCard
                            imagen={e.image}
                            key={e.id}
                            nombre={e.name}
                            estado={e.status}
                            ultimaLocalizacion={e.name}
                            primerEpisodioEnAparecer={e.episode[0]}
                        ></CharacterCard>
                    )
                }
                </div>
            </React.Fragment>


        )
    }

}
