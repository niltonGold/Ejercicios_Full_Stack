

/**
 * Este componente se encargará de pintar un personaje de star wars 
 * que reciba como parámetro de props
 */
function PeopleListItem(props) {

    return (
        <React.Fragment>
            <style>
                {
                    `.people__container{
                    padding: 1rem;
                    border: 1px solid black;
                    margin: 1rem 0.5rem
                }`

                }
            </style>
            <li className='people__container'>
                {props.people !== null
                    ? (
                        <React.Fragment>
                            <h2>{props.people.name}</h2>
                            <p>{props.people.height / 100}m</p>
                            <p>{props.people.mass}Kg</p>
                            <p>{props.people.birth_year}</p>
                        </React.Fragment>
                    )

                    : <p>No pudo superar a la fuerza</p>

                }

            </li>
        </React.Fragment>
    )
}