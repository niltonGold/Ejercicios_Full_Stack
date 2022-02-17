import { Fragment } from "react";

import './style.css';

export default function MostrarListaCamareros(props){

    const handleEliminar = () => {
        props.elimnarCamareroPorDni(props.lista.dni);
    }

    const handleActualizar = () => {
        props.mostrarCamareroPorDni(props.lista.dni);
    }

    return(

            <Fragment>
                <div className="estilo_lista"> 
                    <div className="lista_datos">
                        <div className="descripcion">Nombre:</div>
                        <div className="contenido_descripcion">{props.lista.nombre}</div>
                    </div>

                    <div className="lista_datos">
                        <div className="descripcion">Apellido:</div>
                        <div className="contenido_descripcion">{props.lista.apellido}</div>
                    </div>

                    <div className="lista_datos">
                        <div className="descripcion">Email:</div>
                        <div className="contenido_descripcion">{props.lista.email}</div>
                    </div>

                    <div className="lista_datos">
                        <div className="descripcion">Password:</div>
                        <div className="contenido_descripcion">{props.lista.password}</div>    
                    </div>

                    <div className="lista_datos">
                        <div className="descripcion">Dni:</div>
                        <div className="contenido_descripcion">{props.lista.dni}</div>    
                    </div>
                    
                    <div className="lista_datos">
                        <button onClick={handleEliminar}>eliminar</button>
                        <button onClick={handleActualizar}>actualizar</button>
                    </div>
               
                </div>
                <hr></hr>
            </Fragment>

    )
}