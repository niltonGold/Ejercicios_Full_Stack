import { List } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import MostrarListaCamareros from "../mostrarListaCamareros";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

import './style.css';


const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    // width: '5rem',
    // height: '5rem',
};



export default function Admin() {

    const [listaCamareros, setListaCamareros] = useState([]);
    const [ocultarFormActualizar, setOcultarFormActualizar] = useState(true);
    const [ocultarFormRegistro, setOcultarFormRegistro] = useState(true);
    const [unCamarero, setUnCamarero] = useState([]);

    let history = useHistory();



    const handleListarCamareros = () => {

        const optionsGet = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }

        fetch('http://localhost:3001/user', optionsGet)
            .then(r => r.json())
            .then(d => {
                let listaCamareros = JSON.stringify(d);
                setListaCamareros(JSON.parse(listaCamareros));
            });

    }


    function BorrarPorDni(dni) {

        const optionsDelete = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }

        fetch(`http://localhost:3001/user/${dni}`, optionsDelete)
            .then(r => r.json())
            .then(d => {
                console.log(d.respuesta);
                handleListarCamareros();
            });

    }


    function MostrarCamareroPorDni(dni) {

        if (ocultarFormActualizar) {
            setOcultarFormActualizar(!ocultarFormActualizar);
        }

        const optionsGetOne = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }

        fetch(`http://localhost:3001/user/${dni}`, optionsGetOne)
            .then(r => r.json())
            .then(d => {
                let camarero = JSON.stringify(d);
                setUnCamarero(JSON.parse(camarero));
            });

    }


    const ActualizarDatos = (e) => {

        e.preventDefault();

        const optionsPATCH = {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        }

        fetch(`http://localhost:3001/user/${unCamarero.dni}`, optionsPATCH)
            .then(r => r.json())
            .then(d => {
                handleListarCamareros();
                console.log(d.respuesta);
            });

    }


    const MostrarRegistrarCamareros = () => {

        if (ocultarFormRegistro) {
            setOcultarFormRegistro(!ocultarFormRegistro);
        }

    }


    const RegistrarCamarero = (e) => {

        e.preventDefault();

        const optionsPOST = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value,
                nombre: e.target.nombre.value,
                apellido: e.target.apellido.value,
                dni: e.target.dni.value,

            })
        }

        fetch(`http://localhost:3001/auth/register`, optionsPOST)
            .then(r => r.json())
            .then(d => {
                handleListarCamareros();
                console.log(d.respuesta)

            });

    }

    const handleCancelarActualizar = () => {
        setOcultarFormActualizar(!ocultarFormActualizar)
    }

    const handleCancelarRegistro = () => {
        setOcultarFormRegistro(!ocultarFormRegistro)
    }

    return (

        <div className="pagina_admin">
            <div className="Admin_container">
                <p>PAGINA DEL ADMINISTRADOR</p>
            </div>
            <div className="btn_salir_container">
                <button className="btn_salir" onClick={() => history.push("/")} >SALIR </button>
            </div>
            {/* <Box className='caja1'   sx={{ ...commonStyles, borderRadius: 1, display: 'flex', justifyContent: 'center', gap: '1rem', width:'60%', height: '50vh' }}> */}
            <Box sx={{ ...commonStyles, borderRadius: 1, display: 'flex', gap: '1rem', width: '60vw', height: '50vh' }}>

                <div className="btns_listar_registrar">
                    <Button onClick={handleListarCamareros} variant="contained" size="small" color='secondary'><div>Listar Camareros</div></Button>
                    <Button onClick={MostrarRegistrarCamareros} variant="contained" size="small" color='secondary'><div>Registrar Camarero</div></Button>
                </div>


                {/* <List sx={{ marginTop: 1,width: '100%', maxWidth: 400,  bgcolor: 'red', overflow: 'auto', maxHeight: 200, '& ul': { padding: 0 },}} subheader={<li />} > */}
                <List sx={{ marginTop: 2, width: '100%', maxWidth: 400, bgcolor: '#ffcdd2', overflow: 'auto', maxHeight: 200, }} >
                    {listaCamareros.map((e, i) => <MostrarListaCamareros mostrarCamareroPorDni={MostrarCamareroPorDni} elimnarCamareroPorDni={BorrarPorDni} lista={e} key={i} ></MostrarListaCamareros>)}
                </List>
            </Box>


            <div className={ocultarFormActualizar ? 'form_actualizar_datos--hidden' : ''}>
                <Box className='caja1' sx={{ ...commonStyles, borderRadius: 1, display: 'flex', justifyContent: 'center', gap: '1rem', width: '60vw', height: '30vh', pt: 1, pb: 3 }}>


                    <form className="formulario" onSubmit={ActualizarDatos}>
                        <div className="titulo_formulario">Actualizar Datos de {unCamarero.nombre}</div>
                        <div className="etiquetas">
                            <div className="div_label"> <label htmlFor="email">Email: </label> </div>
                            <input id="email" type="email" placeholder={unCamarero.email} required></input>
                        </div>


                        <div className="etiquetas">
                            <div className="div_label"> <label htmlFor="password">Password: </label> </div>
                            <input id="password" type="text" placeholder={unCamarero.password} required></input>
                        </div>

                        <button type="submit">Actualizar</button>
                        <button onClick={handleCancelarActualizar}>Cancelar</button>

                    </form>

                </Box>
            </div>


            <div className={ocultarFormRegistro ? 'form_registrar_camarero--hidden' : ''}>
                <Box className='caja1' sx={{ ...commonStyles, borderRadius: 1, display: 'flex', justifyContent: 'center', gap: '1rem', width: '60vw', height: '40vh', pt: 1, pb: 3 }}>

                    <form className="formulario" onSubmit={RegistrarCamarero}>

                        <div className="titulo_formulario">Registrar Un Usuario</div>

                        <div className="etiquetas">
                            <div className="div_label"><label htmlFor="email">Email: </label></div>
                            <input id="email" type="email" required></input>
                        </div>

                        <div className="etiquetas">
                            <div className="div_label"><label htmlFor="password">Password: </label></div>
                            <input id="password" type="text" required></input>
                        </div>

                        <div className="etiquetas">
                            <div className="div_label"><label htmlFor="nombre">Nombre: </label></div>
                            <input id="nombre" type="text" required></input>
                        </div>

                        <div className="etiquetas">
                            <div className="div_label"><label htmlFor="apellido">Apellido: </label></div>
                            <input id="apellido" type="text" required ></input>
                        </div>

                        <div className="etiquetas">
                            <div className="div_label"><label htmlFor="dni">Dni: </label></div>
                            <input id="dni" type="text" required></input>
                        </div>

                        <button type="submit">Crear Usuario</button>
                        <button onClick={handleCancelarRegistro}>Cancelar</button>

                    </form>
                </Box>
            </div>

        </div>

    )
}