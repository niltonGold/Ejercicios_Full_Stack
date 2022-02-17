document.write(`<p>hola</p>`);

let i;
let array = [];
let acumuladorT = 0;
for ( let i=0 ; i<10 ; i=i+1 ) {
    array[i]=prompt("Introduce true o false");
    

    if ( array[i] === 'true' ) {
        acumuladorT = acumuladorT + 1; 
    }
    document.write(`<p>${typeof array[i]}</p>`);
}

let num1 = 10;
let num2 = 0.75;
let resultado = 0;
resultado = num1 * num2;;
if ( acumuladorT >=resultado ) {
    document.write(`<h1>Si se están cumpliendo los servicios mínimos</h1>`);
} else {
    document.write(`<h1 style="color:red">No se están cumpliendo los servicios mínimos</h1>`);
}