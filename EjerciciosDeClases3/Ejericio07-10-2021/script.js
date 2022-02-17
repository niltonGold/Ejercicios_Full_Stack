
// document.write(`<p>EJERCICIO 1</p>`);
// /* 1.- Definir dos numeros enteros con 2 valores */
//     let factor1 = 3;
//     let factor2 = 5;
//     let producto;

// /* 2.- funcion donde se realizara la opercion de multipliccion */    
//     function multiplicacion( factor1,factor2 ){
//         return (factor1 * factor2);
//     }

// /* 3.- Llamar a la funcion */    
//     producto = multiplicacion(factor1,factor2);

// /* 4.- Mostrar el resultado por la web */
//     document.write(`<p>${factor1} * ${factor2} = ${producto}</p>`);    






// document.write(`<p>EJERCICIO 2</p>`);
// /* 1.- Definir un string con la palabra hola */
//     const palabra1 = 'hola';

// /* 2.- Definir en una constante lo que entra por prompt */
//     const palabra2 = prompt("Escribe algo");

// /* 3.- Concatenar palabra1 y palabra2 y mostrarlo por el navegador */
//     const palabraConcatenada = palabra1 + palabra2;
//     document.write(`<p>La palabra concatenada es "${palabraConcatenada}"</p>`);



// document.write(`<p>EJERCICIO 3</p>`);
// /* 1.- Definir dos booleanos e inicializarlos */
//     const boolean1 = true;
//     const boolean2 = false;

    
// /* 2.- Definir una funcion que calcule el AND de dos booleanos */   
//     function booleanAnd ( parametro1, parametro2 ){
//         return ( parametro1 && parametro2 );
//     }

// /* 3.- Mostrar por pantalla la operacion AND de dos booleanos */
//     const booleanResult = booleanAnd(boolean1,boolean2);
//     document.write(`<p>${boolean1} AND ${boolean2} = ${booleanResult}</p>`);
   


// document.write(`<p>EJERCICIO 4</p>`);
// /* 1.-  */
//     const asteriscos = prompt("Introduce un numero");
//     let i;
//     let lista = '<p> ';
//     for ( let i=1; i<=asteriscos ; i=i+1 ) {
//         lista = lista + ' * ';
//     }
//     lista = lista + ' </p>';
//     document.write(lista);
    



// document.write(`<p>EJERCICIO 5</p>`);
//     const f1 = 3;
//     const f2 = 5; 
//     function multiplicacionSuma( f1 , f2 ){
//         let j;
//         let acumulador = 0;
//         for ( let j=1; j<=f2 ; j=j+1 ) {
//             acumulador = acumulador + f1;    

//         }
//         return acumulador;       
//     }
//     const factorFinal = multiplicacionSuma(f1,f2);
//     document.write(`<p>${factorFinal}</p>`);


document.write(`<p> ----------------------------------------------- </p>`);
document.write(`<p>- Escribir una funcion que dado un numero, devuleva el numero al revés</p>`);
document.write(`<p>  (Ejemplo: 3456 => 6543 )</p>`);



let numeroVolteado = prompt("Escribe un numero para voltearlo");

function alReves( param ){
    let acumul = '';
    let longitud = param.length;
    for (  let i=longitud-1 ; i>=0 ; i-- ) {
        acumul = acumul + param.charAt(i); 
    }
    return acumul;  
}


numeroVolteado = alReves(numeroVolteado);
document.write(numeroVolteado);







document.write(`<p>- Escribir una función que dado un número devuelva si es capicua o no</p>`);
document.write(`<p>  (Hit: sar la funcion anterior) </p>`);

let numeroCapicua1 = prompt("Escribe un numero para saber si es capicua");
let numeroCapicua2 = alReves(numeroCapicua1);

if ( numeroCapicua1 === numeroCapicua2 ) {
    document.write( `${numeroCapicua1} y ${numeroCapicua2} SI son numeros capicua` );
} else if ( numeroCapicua1 !== numeroCapicua2 ) {
    document.write( `${numeroCapicua1} y ${numeroCapicua2} No son numeros capicua` );
}


document.write(`<p>- Escribir una funcion que devuelva el tipo del parámetro de entrada que le pasemos, </p>`);
document.write(`<p>  que no sea por promt. Debemos crear varias variables:</p>`);

const tipoString = 'Es es String';
const tipoNumber = 3;
const tipoBoolean = true;
let noDefinido;
const esNull = null;

document.write(`<p> ${typeof tipoString} </p>`);
document.write(`<p> ${typeof tipoNumber} </p>`);
document.write(`<p> ${typeof tipoBoolean} </p>`);
document.write(`<p> ${typeof noDefinido} </p>`);
document.write(`<p> ${typeof esNull} </p>`);






