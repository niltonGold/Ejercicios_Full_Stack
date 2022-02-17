

class App extends React.Component{

    render(){
        return (
            <React.Fragment>
                {Array(150).fill(null).map((_, i) => (i+1)%2 === 0 ? <PokemonCardComponent id={i+1}></PokemonCardComponent> : '')}
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

