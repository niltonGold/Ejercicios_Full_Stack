/**
 * temperatura
 * pais
 * ciudad
 */

//  import { Fragment, useEffect, useState } from "react";
// import Horas_Temperatura from "../horas_temperatura";



// export default function DatosCiudad(props){
    
//     const [ listaPaises, setPaises ] = useState([]);

//     const [ nombrePais, setNombrePais ] = useState('');

//     const [ temperatura, setTemperatura ] = useState(0);

//     const [ temperaturaHoras, setTemperaturaHoras ] = useState([]);
 

//     // funcion que me devuelve el nombre de un pais en base a su codigo
//     async function data(code){
//         const d = await fetch(`https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json`);
//         const date = await d.json();
//         setPaises(date);

//         let encontrado = [];

//         if ( code === undefined ){
//             {console.log('error')}
//         }else{
//         encontrado = listaPaises.countries.find( e => e.code === code );
//         setNombrePais(encontrado.name_es);
//         }
//     };


//     // funcion que me devuelve una array de 24 horas, y la temperatura de cada hora
//     async function HorasTemperatura(lat, lon){
//         const d = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=f5c32f671f74c888dabe4ad723922e92`);
//         const date = await d.json();

//         if (date.hourly === undefined){
//             console.log('error horas');
//         }else{
//                 let arr = [];
//                 date.hourly.forEach( (e,i) => {
//                             if(i<=24){
//                             arr[i] = e.temp;
//                             }
//                         })    
//                 setTemperaturaHoras(arr);
//         }   
//     };    


//     // funcion que me convierte kelvin a celcius
//     function kelvinAcelcius(temp){
//         setTemperatura(parseInt(temp)-273.15);
//     }


//     useEffect( () => {
//         kelvinAcelcius(props.temperatura);
//         data(props.paisCode);
//         HorasTemperatura(props.lat, props.lon);
//     }, [props.paisCode, props.lon, props.lat]);


//     return(
//         <Fragment>

//             <div>{'temperatura: '+temperatura.toFixed(0)+ 'ºC'}</div>
//             <div>{'pais: '+nombrePais}</div>
//             <div>{'ciudad: '+props?.ciudad}</div>
            
//             <div className="temperatura_por_hora">
//                 {/* Componente al cual le paso un array de la temperatura de 24 horas */}
//                 {/* <Horas_Temperatura  value={temperaturaHoras}></Horas_Temperatura> */}
//             </div> 
            
//         </Fragment>
//     )
// }