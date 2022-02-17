class Header extends React.Component{

    render(){
        return(
            <header className="header">
                <div>Header</div>
                <ul className="header_list">
                    <li> <ReactRouterDOM.Link to="/home">home</ReactRouterDOM.Link> </li>
                    <li> <ReactRouterDOM.Link to="/CardPokemon">CardPokemon</ReactRouterDOM.Link> </li>
                    <li> <ReactRouterDOM.Link to="/CardRickAndMorty">CardRickAndMorty</ReactRouterDOM.Link> </li>
                    <li> <ReactRouterDOM.Link to="/3links">3Links</ReactRouterDOM.Link> </li>
                </ul>
                
            </header>

        )
    }

}