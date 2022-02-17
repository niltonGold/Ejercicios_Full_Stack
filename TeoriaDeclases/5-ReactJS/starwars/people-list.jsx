

/**
 * Esto es un componente que tiene que ir al servidor s buscar la informacion
 * de los personajes de starwars y pintarlos en una lista
 */
function PeopleList() {
    const [characters, setCharacters] = React.useState([]);
    React.useEffect(() => {

        fetch('https://swapi.dev/api/people')
            .then(r => r.json())
            .then(d => {
                for (let i = 1; i <= d.count; i++) {
                    fetch(`https://swapi.dev/api/people/${i}`)
                        .then(r => {
                            // si recibimos respuesta del servidor y la respuesta no es 200-299,
                            // no tenemos el personaje, por lo que lanzamos un error
                            if (!r.ok) throw new Error('Error del servidor');
                            return r.json();
                        })
                        .then(p => setCharacters(oldValue => oldValue.concat([{ ...p, id: i }])))
                        // utilizamos esta funcion para capturar los errores y actuar segun
                        // necesitemos, en este caso decir que el character es null.
                        .catch(() => setCharacters(oldValue => oldValue.concat([null])))
                }
            });

    }, []);

    return (
        <ul>
            {characters.map(c => c !== null 
            ? <ReactRouterDOM.Link key={c.id} to={`/${c.id}`}>
                <PeopleListItem people={c}></PeopleListItem>
              </ReactRouterDOM.Link> 
            : '')}
        </ul>
    )
}