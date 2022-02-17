import { Fragment, useState, useEffect } from 'react';
import './style.css';

export default function MostrarLosPedido(props){
    const [ precioTotal, setPrecioTotal ] = useState(0);


    const handleClick = () => {
        props.borrarItem(props.id, props.pedido.precio)
    }

 
useEffect( () => {
    props.sumarPrecio(parseFloat(props.pedido.precio));
},[]);

    return(

         
            <ul className="ul">
                <li>{props.pedido.nombre}</li>
                <li>{props.pedido.precio} €</li>
                <li> <button onClick={handleClick} id={props.id}>eliminar</button> </li>
                
            </ul> 

       
    )
}