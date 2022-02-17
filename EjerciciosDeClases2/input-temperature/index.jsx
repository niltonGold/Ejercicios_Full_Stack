


function InputTemperature({label, value, onTempChange}) {
    
    return (
        <div>
            <label htmlFor={`${label}_TEMPERATURE`}>{label}</label>
            <input 
            // Ejecutamos la función de nuestro padre pasándole el valor del input
                onChange={e => onTempChange(parseFloat(e.target.value))}
                id={`${label}_TEMPERATURE`} 
                type="text" 
                placeholder={`Introduzca la temperatura en ${label}`}
                value={value}></input>
        </div>
    )
}

export default InputTemperature;