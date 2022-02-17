import './style.css';

export default function TicketList(props){
    
    return(

        <div className="una_linea_lista">
            <div className='producto'>{props.listaProductos.nombre}</div>  <div className='puntos'>:</div> <div className='precio'>{props.listaProductos.precio} €</div>
        </div>    

    )
}