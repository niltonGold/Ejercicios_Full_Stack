import InputTemperature from "../input-temperature";
import React,{useState} from 'react';


function TemperatureCalculator(){
    const [celsius, updateCelsius] = useState(0);
    const [fahrenheit, updateFahrenheit] = useState(32);
    

    const celsiusToFahrenheit = c => {
        c = isNaN(c) ? 0 : c;
        updateFahrenheit((c*9/5)+32);
        updateCelsius(c);
    }

    const fahrenheitToCelsius = f => {
        f = isNaN(f) ? 0 : f;
        updateCelsius((f-32)*5/9);
        updateFahrenheit(f);
    }

    return (
        <React.Fragment>
            <InputTemperature value={celsius} label="Celsius" onTempChange={celsiusToFahrenheit}></InputTemperature>
            <InputTemperature value={fahrenheit} label="Fahrenheit" onTempChange={fahrenheitToCelsius}></InputTemperature>
        </React.Fragment>
    )
}


export default TemperatureCalculator;