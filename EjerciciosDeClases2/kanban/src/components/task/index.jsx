


export default function Task(props){

    return (
        <div>
            <i>{props.status === 'Done' ? 'Rojo' : 'Verde'}</i>
            <p>{props.info.name}</p>
            <i>Papelera</i>
            <p>#{props.info.id} created on {props.info.creationDate.toLocaleString()}</p>
        </div>
    )
}