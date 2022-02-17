function CharacterCard(props){

    return ( 
        <div>
            <ul>
                <li>Nombre: {props.nombre}</li>
                <li>Color de ojos: {props.ojos}</li>
                <li>Nacimiento: {props.nacimiento}</li>
                <li>Genero: {props.genero}</li>
            </ul>
        </div>
     )

}