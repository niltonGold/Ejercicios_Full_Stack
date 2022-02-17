import * as React from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { useHistory } from "react-router-dom";
import {useTranslation} from "react-i18next";

import './style.css';

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
//   width: '5rem',
width :'100%'
//   height: '5rem',
};




export function Pago(props){

    const [t, i18n] = useTranslation('common');

    let history = useHistory();

    const [ calculoDePagoPositivo, setCalculoDePagoPositivo] = React.useState(0);
    const [ calculoDePagoNegativo, setCalculoDePagoNegativo] = React.useState(0);

    const [ cuadroPagoPendiente, setCuadroPagoPendiente ] = React.useState(true);
    const [ cuadroPagoDevolver, setCuadroPagoDevolver ] = React.useState(true);



    // function SaldoPendiente(num){
        // console.log('saldo cuenta: '+saldoCalculado);
        // console.log('pago efectivo: ' +num);
        // let numAux = parseInt(saldoCalculado) + parseInt(num);
        // console.log(numAux);
        // setSaldoCalculado(numAux);
    //  }


    function CalculoPagos(num){
        if ( num >= 0 ){
            if (cuadroPagoDevolver){
                setCuadroPagoDevolver(false);
            }
            if (!cuadroPagoPendiente){
                setCuadroPagoPendiente(true);
            }
            setCalculoDePagoPositivo(num);
        }else{
            if (cuadroPagoPendiente){
                setCuadroPagoPendiente(false)
            }
            if (!cuadroPagoDevolver){
                setCuadroPagoDevolver(true);
            }

            setCalculoDePagoPositivo(0);
            setCalculoDePagoNegativo(num*-1)
        }

    }





    function handleReinicio(){
        props.reiniciar();
    }



    const handlePagar = () => {
        sessionStorage.setItem('totalApagar', props.precioTotal);
        sessionStorage.setItem('efectivo', props.pagoEfectivo);
        sessionStorage.setItem('tarjeta', props.pagoTarjeta);
        sessionStorage.setItem('devolverAlCliente', calculoDePagoNegativo);
        
        history.push("/ticket");
        
    }

React.useEffect( () => {
    CalculoPagos(props.precioPendiente)
},[props.precioPendiente] )
    

    return(
        <React.Fragment>
            <div className='contenedor_pagos'>
                 
                   
                <Box sx={{ ...commonStyles, borderRadius: 1, textAlign: 'center'}}>
                    <div className='totalpagar_container'>
                        <div className='totalApagar'>{t('totalapagar.totalapagar')} :</div>
                        <div>{props.precioTotal} €</div>
                    </div>
                </Box>
            
                <Box  sx={{ ...commonStyles, borderRadius: 1, textAlign: 'center', pb: 2, pt: 2 }}>
               
      
                        <div className='container_efectivo_tarjeta'>
                            <div className='efectivo_tarjeta'>
                                <div>{t('efectivo.efectivo')}:</div>
                                <div>{t('tarjeta.tarjeta')} :</div>  
                            </div> 
                            
                            <div className='efectivo_tarjeta'>
                                <div>{props.pagoEfectivo} €</div>
                                <div>{props.pagoTarjeta} €</div>
                            </div>  
                        </div>         
                         

                        <button onClick={handleReinicio}>{t('reinicio.reinicio')}</button>
                   
                </Box>
            
                <Box sx={{ ...commonStyles, borderRadius: 1, display: 'flex', justifyContent: 'center' }}>
                    <div className={cuadroPagoPendiente ? 'pago_pendiente':'pago_pendiente--hidden'}>
                        <div className='pendiente'>{t('pendiente.pendiente')} :</div>
                        <div>{calculoDePagoPositivo} €</div>
                    </div>

                    <div className={cuadroPagoDevolver ? 'pago_devolver':'pago_pendiente--hidden'}>
                        <div className='pendiente'>{t('devolver.devolver')} :</div>
                        <div>{calculoDePagoNegativo} €</div>
                    </div>

                </Box>
                          
                <Box sx={{ ...commonStyles, borderRadius: 1, bgcolor: 'red', display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={handlePagar} sx={{width: '100%'}} variant="contained" disableElevation>
                            {t('finalizar_pago.finalizar_pago')}
                        <PointOfSaleIcon/>
                    </Button>
                </Box>
            </div>
            
        </React.Fragment>

    )
}