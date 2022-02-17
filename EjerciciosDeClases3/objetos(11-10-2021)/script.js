let coche = {
    marca : `nova`,
    modelo : `delorian`,
    matricula : `fresh`,
    ruedas : 4,
    color : `plateado`,
    velocidad : `35km/h`,
    itv : false,
}

if ( coche.itv ) {
    document.write(`<p>ITV pasada</p>`);
} else {
    document.write(`<p>ITV NO pasada</p>`);
}

document.write(`<p>Velocidad anterior ${coche.velocidad}</p>`);
coche.velocidad = `50km/h`;
document.write(`<p>Nueva Velocidad ${coche.velocidad}</p>`);


