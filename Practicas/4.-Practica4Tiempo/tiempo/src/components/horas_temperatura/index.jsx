/**
 * Esta funcion me gestionara las mini card del la temperatura de cada hora
 * de las 24 horas
 */


import { Fragment } from "react";

export default function Horas_Temperatura(prop){


    function prueba(i){
        let st
        if ( i<9){
            st = `${0}${i}:${0}${0}`;
        }else{
            st = `${i}:${0}${0}`;
            if(i===24){
                st = `${0}${0}:${0}${0}`;
            }
        }
        return st;
    }



    function kelviACelsius(temp){
           return temp-273.15;
    }


    return(
        <Fragment>
                {
                    prop.value.map( (e,i) =>  

                        <div className="horas">   
                            <div>{prueba(i)}</div>
                            <div>nube</div>
                            
                            <div>{kelviACelsius(e).toFixed(0)+'ºC'}</div>
                        </div>
                    
                                )
                    
                }
        </Fragment>
    )
}