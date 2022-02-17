
import * as React from 'react';
import TextField from '@mui/material/TextField';
import './style.css';
import Box from '@mui/material/Box';
import { useHistory } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import {useTranslation} from "react-i18next";
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';





export default function Login(){

    const [t, i18n] = useTranslation('common');

    const [ respuestaFromMongo, setRespuestaFromMongo] = useState('');

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

            if(e.target.checkValidity()){

                    if( (e.target.name.value == 'admin@admin') && (e.target.password.value === 'admin') ){
                        console.log('eres el admin');
                        sessionStorage.setItem('token','admintoken')
                        history.push("/admin");
                    }else{
                        const options = {
                            method: 'POST',
                            headers:{
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: e.target.name.value,
                                password: e.target.password.value
                            })
                        }
                        fetch('http://localhost:3001/auth/login', options)
                        .then(r => r.json() )
                        .then(d => {
                                    let posicionDelPunto = d.respuesta.indexOf('.');
                                    let mensaje = d.respuesta.slice(0,posicionDelPunto)
                                    if( mensaje === 'SessionIniciada'){
                                        console.log('usuario correco');
                                        let token = d.respuesta.slice( (posicionDelPunto + 1), (d.respuesta.length - 1));
                                        console.log(token);
                                        sessionStorage.setItem('token', token);
                                        history.push("/pagina_mesas");
                                    }else if( mensaje === 'UsuarioEnSesion' ) {
                                        setRespuestaFromMongo('Sesion ya Iniciada');
                                        let token = d.respuesta.slice( (posicionDelPunto + 1), (d.respuesta.length - 1));
                                        console.log(token);
                                        sessionStorage.setItem('token', token);
                                        history.push("/pagina_mesas");
                                    }else if( mensaje === 'UsuarioIncorrecto' ){
                                        setRespuestaFromMongo('Usuario incorrecto ');
                                    }
                        } );
                    }       

            }else{
                console.log('error del formulario');
            }
                        
    }




    const handleIniciarSesion = () => {
        setRespuestaFromMongo('');
    }






    return(

       <Box className="login_page" >

                <Box sx={{ width: {    mobile: 300,   laptop: 400,  },display: '-ms-flexbox', alignItems: 'center', '& > :not(style)': { m: 5 },}} >

                    <form onSubmit={handleSubmit}>
                        <div className="login_container">

                                <Typography align='center' variant="h5" component="div" gutterBottom>
                                    {t('login.title')}
                                </Typography>

                                <div className='usuario_incorrecto'>{respuestaFromMongo}</div>

                                <TextField
                                    className="textField_uno"
                                    color="secondary"
                                    required
                                    helperText={t('login.please_enter_name')}
                                    id="demo-helper-text-aligned-name"
                                    label={t('login.name')}
                                    type="email"
                                    name="name"
                                    onClick={handleIniciarSesion}
                                />

                                <TextField
                                    color="secondary"
                                    required
                                    helperText={t('login.please_enter_password')}
                                    id="demo-helper-text-aligned-password"
                                    label={t('login.password')}
                                    type="password"
                                    name="password"
                                    onClick={handleIniciarSesion}
                                />



                                <Button color="secondary" onClick={handleIniciarSesion} type="submit"  variant="contained" disableElevation>
                                    {t('login.log_in')}
                                </Button>

                                <div className='politica_condiciones_container'>
                                    <div className='politica_condiciones'>
                                        <VerifiedUserIcon></VerifiedUserIcon><Link to={`/politica_privacidad`}><Grid  sx={{ fontSize:10 }}>Politica y Privacidad</Grid></Link>
                                    </div>

                                    <div className='politica_condiciones'>
                                        <CheckCircleIcon></CheckCircleIcon><Link to={`/terminos_condiciones`}><Grid  sx={{ fontSize:10 }}>Terminos y Condiciones</Grid></Link>
                                    </div>
                                </div>
                        </div>


                    </form>

                </Box>






        </Box>

    )
}