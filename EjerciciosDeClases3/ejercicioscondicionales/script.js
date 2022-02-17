
alert("alerta1");

let speedLimit = 0;
let airQuality = parseInt(prompt("Nivel de Contaminacion"));

if ( airQuality > 65 ) {
    speedLimit = 70; 
} else {
    speedLimit = 120;
}

document.write(`<p>Velocidad permitida hoy: ${speedLimit} </p>`);



document.write(`<input type="checkbox" class="aceptar" name="accept"></input>`);
document.write(`<label for=aceptar>caja</label>`);
let nm = document.getElementsByClassName(`aceptar`);

if(nm.checked == true){
    document.write(`<p>Velocidad permitida </p>`);
}

