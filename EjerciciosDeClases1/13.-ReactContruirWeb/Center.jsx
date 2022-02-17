
class Center extends React.Component{

    render(){
        return(
            <main className="main">
                <ReactRouterDOM.Switch>

                        <ReactRouterDOM.Route path="/home">
                            <Home></Home>
                        </ReactRouterDOM.Route>

                        

                        <ReactRouterDOM.Route path="/CardPokemon">
                            <h1>holassss</h1>
                            <CardPokemonList></CardPokemonList>
                        </ReactRouterDOM.Route>

                        <ReactRouterDOM.Route path="/CardRickAndMorty">
                            <div><CardList></CardList></div>
                        </ReactRouterDOM.Route>

                        <ReactRouterDOM.Route path="/3links">
                            <Links123></Links123>
                        </ReactRouterDOM.Route>

                    </ReactRouterDOM.Switch>      
            </main>
        )

    }

}