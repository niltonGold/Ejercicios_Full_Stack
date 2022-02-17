document.write(`<p>1.- Crear un bucle For que de 100 vueltas`);
document.write(`<p>    y pinte en el HTML un h1 en cada vuela con`);
document.write(`<p>    con el numero de vuelta`);

let i1;
parseInt(i1);
for ( let i1=1 ; i1<=100 ; i1=i1+1 ) {
    document.write(`<h1>Vuelta ${i1}</h1>`);
}

document.write(`<p>2.- Crear un bucle for que pinte en el HTML los`);
document.write(`<p>    impares de los primeros 100 numeros `);

let i2;
parseInt(i2);
for ( let i2=1 ; i2<=100 ; i2=i2+1 ) {
    if( i2 % 2 !=0){
        document.write(`<p>${i2}</p>`);
    }
}

document.write(`<p>3.- Crear un bucle for que pinte en el HTML los`);
document.write(`<p>    impares de los primeros 987 numeros `);

let i3;
parseInt(i3);
for ( let i3=1 ; i3<=987 ; i3=i3+1 ) {
    if( i3 % 2 != 0){
        document.write(`<p>${i3}</p>`);
    }
}

document.write(`<p>4.- Crear un bucle for que pida al usuario una frase y pinte`);
document.write(`<p>    en una lista no ordenada cada uno de sus caracteres por `);
document.write(`<p>    por separado (es decir en su propio li). Pista acordarse `);
document.write(`<p>    de la función charAt de los strings `);

/*
let frase = prompt("Escribe una frase");
alert(frase.charAt(1));
document.write(`<p>${frase.charAt(1)}</p>`);
*/


let frase = prompt("Escribe una frase")
let i4;
let lista = '<ul>';
for ( let i4=0; i4<=frase.length-1 ; i4=i4+1 ) {
    lista = lista + `<li>${frase.charAt(i4)}</li>`;
}
lista = lista + '</ul>'
document.write(lista);