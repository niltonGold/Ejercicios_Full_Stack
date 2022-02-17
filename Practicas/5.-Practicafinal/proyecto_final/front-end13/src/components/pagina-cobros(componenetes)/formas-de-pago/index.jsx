import CreditCardIcon from '@mui/icons-material/CreditCard';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import quinientos from './dineroIconos/500.jpg'
import doscientos from './dineroIconos/200.jpg'
import cien from './dineroIconos/100.jpg'
import cincuenta from './dineroIconos/50.jpg'
import veinte from './dineroIconos/20.jpg'
import dies from './dineroIconos/10.jpg'
import cinco from './dineroIconos/5.png'

import dos from './dineroIconos/2.png'
import uno from './dineroIconos/1.png'
import cincuentaCenti from './dineroIconos/0_50.png'
import veinteCenti from './dineroIconos/0_20.png'
import diesCenti from './dineroIconos/0_10.png'
import cincoCenti from './dineroIconos/0_05.png'
import dosCenti from './dineroIconos/0_02.png'
import unCenti from './dineroIconos/0_01.png'
import AdjustIcon from '@mui/icons-material/Adjust';
import {useTranslation} from "react-i18next";

import './style.css';


export function FormasDePago(props){

    const [t, i18n] = useTranslation('common');

    const [ valor, setValor ] = React.useState('');


        
 
 


    const handleClickEfectivo = (e) => {
        props.pagoEnEfectivo(parseFloat(e.target.id));
        // props.capturarCuenta(parseInt(e.target.id))
        //  console.log(e)
    }


    const handleClickTarjeta = () => {
        props.pagoTarjeta(parseFloat(valor));
        // console.log('forma de pago: '+ parseFloat(valor) );
        // props.capturarCuenta(parseInt(e.target.id))
        // console.log(parseInt(e.target.id))
        setValor('');
    }




    const handleTarjeta = (e) => {

        if( (valor === '') && (e.target.id !== '.') ){
            // console.log(e.target.id);
            let num = valor + e.target.id
            setValor(num); 
        }else if ( (e.target.id === '.') && (valor !== '') && (!valor.includes('.')) ) {
            let num = valor + e.target.id
            setValor(num);          
        }else if ( (e.target.id !== '.') && (!valor.includes('.') ) ) {
            let num = valor + e.target.id
            setValor(num);  
        }else if ( (e.target.id !== '.') && (valor.includes('.') ) ) {
            // console.log('pensando')
            let posicionDelPunto = valor.indexOf('.');
            let ultimaPosicion = valor.length - 1;
            // console.log(posicionDelPunto);
            // console.log(ultimaPosicion);
            if( (ultimaPosicion - posicionDelPunto) < 2 ){
                let num = valor + e.target.id
                setValor(num);  
            }else{
                console.log('error');
            }
        
        }

        if( (e.target.id === 'borrar') ){
            setValor('');
        }
    }

    return(
        <div>

            <div  className='pago_efectivo'>
                <div>
                    <button onClick={handleClickEfectivo} ><img  id='500' width="100" height="50" src={quinientos}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='200' width="100" height="50" src={doscientos}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='100' width="100" height="50" src={cien}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='50' width="100" height="50" src={cincuenta}></img></button>
                </div>

                <div>    
                    
                    <button onClick={handleClickEfectivo} ><img  id='20' width="100" height="50" src={veinte}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='10' width="100" height="50" src={dies}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='5' width="100" height="50" src={cinco}></img></button>
                </div>

                <div>
                    <button onClick={handleClickEfectivo} ><img  id='2' width="30" height="30" src={dos}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='1' width="30" height="30" src={uno}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='0.5' width="30" height="30" src={cincuentaCenti}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='0.2' width="30" height="30" src={veinteCenti}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='0.1' width="30" height="30" src={diesCenti}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='0.05' width="30" height="30" src={cincoCenti}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='0.02' width="30" height="30" src={dosCenti}></img></button>
                    <button onClick={handleClickEfectivo} ><img  id='0.01' width="30" height="30" src={unCenti}></img></button>

                </div>
            </div>
            
            
            <div className='pago_tarjeta'>
                <div className='tarjeta_icon'>
                    <button id='enviar' onClick={handleClickTarjeta}>
                        <CreditCardIcon sx={{ fontSize: 100 }}/>
                    </button>    
                </div>

                <div className='panel_numerico'>

                    <input type="text" value={valor}></input>

                    <div className='panel_numerico_btn'>
                        <Button id='1' onClick={handleTarjeta} variant="contained" size="small">
                        1
                        </Button>
                        <Button id='2' onClick={handleTarjeta} variant="contained" size="small">
                        2
                        </Button>
                        <Button id='3' onClick={handleTarjeta} variant="contained" size="small">
                        3
                        </Button>
                    </div>

                    <div className='panel_numerico_btn'>
                        <Button id='4' onClick={handleTarjeta} variant="contained" size="small">
                        4
                        </Button>
                        <Button id='5' onClick={handleTarjeta} variant="contained" size="small">
                        5
                        </Button>
                        <Button id='6' onClick={handleTarjeta} variant="contained" size="small">
                        6
                        </Button>
                    </div>

                    <div className='panel_numerico_btn'>
                        <Button id='7' onClick={handleTarjeta} variant="contained" size="small">
                        7
                        </Button>
                        <Button id='8' onClick={handleTarjeta} variant="contained" size="small">
                        8
                        </Button>
                        <Button id='9' onClick={handleTarjeta} variant="contained" size="small">
                        9
                        </Button>
                    </div>

                    <div className='panel_numerico_btn'>
                        <Button id='.' onClick={handleTarjeta} variant="contained" size="small">
                            <AdjustIcon sx={ {fontSize: 17 }}></AdjustIcon>
                        </Button>
                        <Button id='0' onClick={handleTarjeta} variant="contained" size="small">
                        0
                        </Button>
                        <Button sx={ {fontSize: 10 }} id='borrar' onClick={handleTarjeta} variant="contained" size="small">
                            {t('borrar.borrar')}
                        </Button>
                    </div>

                </div>

            </div>



        </div>
    )
}