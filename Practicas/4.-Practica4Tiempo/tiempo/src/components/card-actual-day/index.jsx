import './style.css';

import DatosCiudad from '../datos_ciudad';
import { Fragment, useEffect, useState } from "react";
import DaySelector from '../day-selector';

export default function CardActualDay(prop){

    const [ dia, setDia ] = useState([]);

    const [ temperatura, setTemperatura ] = useState(0);

    const [ diaActual  , setDiaActual ] = useState(0);

    const [ nombrePais, setNombrePais ] = useState('');

    const [ listaPaises, setPaises ] = useState([]);

    const [ arraytemperaturaHoras, setArrayTemperaturaHoras ] = useState([]);//contendra el array de las temperaturas por horas

    async function data(ciudad){
        console.log('desde DATA '+ciudad)
        const d = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=f5c32f671f74c888dabe4ad723922e92`);
        const date = await d.json();
        setDia(date);
    };



    async function cityByCode(code){
        const d = await fetch(`https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json`);
        const date = await d.json();
        setPaises(date);

        let encontrado = [];

        if ( code === undefined ){
            {console.log('error')}
        }else{
        encontrado = listaPaises.countries.find( e => e.code === code );
        setNombrePais(encontrado.name_es);
        }
    };



    async function HorasTemperatura(lat, lon){
        const d = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=f5c32f671f74c888dabe4ad723922e92`);
        const date = await d.json();

        if (date.hourly === undefined){
            console.log('error horas');
        }else{
                let arr = [];
                date.hourly.forEach( (e,i) => {
                            if(i<=24){
                            arr[i] = e.temp;
                            }
                        })    
                setArrayTemperaturaHoras(arr);
        }   

        // console.log(p+'hola desde horas temperatura'+p2);
    }; 






    function kelvinAcelcius(temp){
        setTemperatura(parseInt(temp)-273.15);
    }

    function ActullyDate(){
        let d = new Date();
        console.log(d);
        let day = d.getDate();
        console.log(day);
        setDiaActual(day);
    }

    useEffect( () => {
        data(prop.city);
        HorasTemperatura(dia.coord?.lat, dia.coord?.lon);
        ActullyDate();
        kelvinAcelcius(dia.main?.temp);
        cityByCode(dia.sys?.country);
        
        
    }, [prop.city, dia.main?.temp, dia.coord?.lat, dia.coord?.lon]);

    return(
        <Fragment>

            <div className='card_container'>
                
                    <p>ICONO</p>
                    <p className='small'>{temperatura.toFixed(0)+' ºC'}</p>
                    <p className='big'>{diaActual}</p>
                    <p className='small'>{nombrePais}, {prop.city}</p>
                    {/* <p>{arraytemperaturaHoras}</p> */}
            </div>    


            <div>
                <DaySelector arr={arraytemperaturaHoras}></DaySelector>
            </div>
        
        </Fragment>

    )
}

