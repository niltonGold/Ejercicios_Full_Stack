


function CharacterCardList(){
    let personajes = [];
    React.useEffect( () => {
        fetch('https://swapi.dev/api/people/')
        .then( r => r.json() )
        .then( d =>  {personajes = d} )
                       
    }, [] );

    return (
        <React.Fragment>
            {
                personajes.map(e=>
                    <CharacterCard
                        nombre={e.name}
                        ojos={e.eye_color}
                        nacimiento={e.birth_year}
                        genero={e.gender}
                    ></CharacterCard>
                    )
            }
        </React.Fragment>
    );

}