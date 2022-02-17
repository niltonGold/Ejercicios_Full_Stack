class Links123 extends React.Component{

    render(){
        return(
            <div className="div_3links">

                <ul className="header_list">
                    <li> <ReactRouterDOM.Link to="/home">LinkAHome</ReactRouterDOM.Link> </li>
                    <li> <ReactRouterDOM.Link to="/CardPokemon">LinkACardPokemon</ReactRouterDOM.Link> </li>
                    <li> <ReactRouterDOM.Link to="/CardRickAndMorty">LinkACardRickAndMorty</ReactRouterDOM.Link> </li>

                </ul>
                
            </div>

        )
    }

}