import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormasDePago } from "../../components/pagina-cobros(componenetes)/formas-de-pago";
import PaginaCobrosHeader from "../../components/pagina-cobros(componenetes)/pagina-cobros-header";
import { Pago } from "../../components/pagina-cobros(componenetes)/pago";

import './style.css';



export  function PaginaCobro(){
    
    let { cuentaTotal } = useParams();

    const [ dineroPagadoEfectivo, setDineroPagadoEfectivo ] = useState(0);
    const [ dineroPagadoTarjeta, setDineroPagadoTarjeta ] = useState(0);
    const [ cuenta , setCuenta ] = useState(cuentaTotal);
    // const [ hasChange , setHasChange ] = useState(false);


    function CalcularCuenta(num){// calcula la cuenta, cuanto se esta pagando, o se debe devolver
        // console.log('calcular cuenta: '+ num);
        // console.log('fdsafds'+cuenta);
        let numAux = parseFloat(cuenta) - parseFloat(num);
        setCuenta(numAux.toFixed(2));
    }


    function ActualizarDineroPagadoEfectivo(pago){
        if ( isNaN(pago)){
            console.log('es nan error')
            pago = 0;
            console.log('pago vale'+pago)
        }
        console.log('la cantidad de efectivo es: '+pago)
        CalcularCuenta(pago)
        // setCantidadDada(parseInt(pago));
        let num = parseFloat(dineroPagadoEfectivo) + parseFloat(pago);
        // setHasChange(!hasChange);
        setDineroPagadoEfectivo(num.toFixed(2));
    }



    function ActualizarDineroPagadoTarjeta(pago){
        // console.log('la cantidad de tarjeta es: '+pago)
        if ( isNaN(pago)){
            console.log('es nan error')
            pago = 0;
            console.log('pago vale'+pago)
        }
        CalcularCuenta(pago)
        let num = dineroPagadoTarjeta + pago;
        setDineroPagadoTarjeta(num);

    }



    function Reinicio(){
        let sumaTarjetaEfectivo =  parseFloat(dineroPagadoEfectivo) + parseFloat(dineroPagadoTarjeta);
        let cuentaOriginal = parseFloat(cuenta) + parseFloat(sumaTarjetaEfectivo);
        setDineroPagadoEfectivo(0);
        setDineroPagadoTarjeta(0);
        setCuenta(cuentaOriginal)
    }
    // function CapturarDinero(money){
    //     console.log('dinero capturado '+money)
    //     setDineroCapturado(money);
    //     // console.log(typeof money)
    // }

    



    // useEffect( ()=>{
    //     // ActualizarArray(props.listaItems);
    //     console.log('se ha actualizado');
    // },[hasChange] )

    
    return(
        <div>
            <header>
                <PaginaCobrosHeader></PaginaCobrosHeader>
            </header>


            <div className="contenedor_pago_forma">
                <div className="div_pago">
                    <Pago reiniciar={Reinicio} pagoTarjeta={dineroPagadoTarjeta} pagoEfectivo={dineroPagadoEfectivo} precioPendiente={cuenta} precioTotal={cuentaTotal}></Pago>
                </div>

                <div className="div_formaspago">
                    <FormasDePago pagoTarjeta={ActualizarDineroPagadoTarjeta} pagoEnEfectivo={ActualizarDineroPagadoEfectivo}></FormasDePago>
                </div>
            </div>    
            
        </div>
    )
}