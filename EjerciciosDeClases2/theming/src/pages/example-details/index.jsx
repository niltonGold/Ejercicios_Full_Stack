import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';


function ExampleDetail() {
    const { boot } = useParams();
    const history = useHistory();
    const [counter, updateCounter] = useState(100);
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${boot}`)
        .then(r => r.json())
        .then(p => setPokemon(p))
    }, [boot]);

    const handleClick = () => history.push('/demoHistory');
    return (
        <React.Fragment>
            <p>Esto es la página de ejemplo de: {boot} {counter}</p>
            <img alt="" src={pokemon.sprites?.front_default} />
            <button onClick={handleClick}>Haz algo</button>
        </React.Fragment>
    )
}

export default ExampleDetail;