

class AppIndex12 extends React.Component{
    

    render(){
        return (
            <React.Fragment>
                <CharacterCard nombre="n" estado="v" ultimaLocalizacion="e" primerEpisodioEnAparecer="4"></CharacterCard>
                <CardList></CardList>
            </React.Fragment>

        )
    }
}

ReactDOM.render(
    <AppIndex12/>,
    document.getElementById('root')
)