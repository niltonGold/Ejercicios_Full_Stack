// document.write(`<p>1.-</p>`);
// /* 1.- Definir un array y una variable numerica */
// let num1 = 2;
// const array1 = [3,2,4,5];

// function Ejercicio1( num, lista ){
//     const E1 = lista.indexOf(num);
//     return E1;    
// }

// document.write(Ejercicio1(num1,array1));


// document.write(`<p>2.-</p>`);
// const array2 = [1,8,3,7,10];

// function deMayorAmenor(lista){
//     lista.sort(function(a,b){
//         return a-b;
//     });
//     return lista;
// }

// document.write(deMayorAmenor(array2).reverse());



// document.write(`<p>3.-</p>`);
// let a1 = [1,2,3];
// let a2 = [4,5,6,];

// function DosArrays(lista1,lista2){
//     return lista1.concat(lista2);
// }
// document.write(DosArrays(a1,a2));



// document.write(`<p>4.-</p>`);
// let array4 = [11,12,33,44,23,21,79,43,23,4];
// function condicionDe10 ( lista ) {
//     return lista.every(elem => elem > 10);
// }
// document.write(condicionDe10(array4));


// document.write(`<p>5.-</p>`);
// let array5 = [20,30,40,9];
// function mayoresDe10(lista){
//     return lista.filter( numero => numero > 10 );
// }
// document.write(mayoresDe10(array5));




// document.write(`<p>6.-</p>`);
// let palabra = 'hola String';

// function palabraMayuscula(word){
//     return word.toUpperCase();
// }
// document.write(palabraMayuscula(palabra));


// document.write(`<p>7.-</p>`);
// let palabra7 = 'Prueba';

// function getCaracteres(word){
//     const primeros3 = word.charAt(0) + word.charAt(1) + word.charAt(2);
//     return primeros3;
// }
// document.write(getCaracteres(palabra7));



// document.write(`<p>8.-</p>`);

// let array8_1 = ['gato', 'perro'];
// let array8_2 = ['Gato', 'perro'];
// let array8_3 = ['gAto', 'peRRo'];

// function capitalizar(lista){
//     return lista.map( ( e , i, arra) => arra[i] =  arra[i].charAt(0).toUpperCase() + arra[i].slice(1,arra[i].length).toLowerCase() );;
// }

// document.write(`<div>${capitalizar(array8_1)}</div>`);
// document.write(`<div>${capitalizar(array8_2)}</div>`);
// document.write(`<div>${capitalizar(array8_3)}</div>`);



// document.write(`<p>9.-</p>`);
// let valor9 = [1,2];
// function verdaderoOfalso ( parametro ) {
//     let valor = typeof parametro;
//     return valor === 'object';
// }
// document.write(verdaderoOfalso(valor9));


/* ------------------------------------------------------ */

document.write(`<p>10.-</p>`);
let para1 = 'c++';
let array10 = ['c','c++','python','golang','solidity','typescript','javascript','java','go','pascal','scala',];

function existe( lista, palabra ) {
    return lista.includes(palabra);
}
document.write(existe(array10, para1));


document.write(`<p>11.-</p>`);

function piramide(lista){
    lista.pop();
    return lista;
}


for ( let i=array10.length ; i>1 ; i--){
    piramide(array10);
    document.write(`<p>${array10}</p>`);
}



document.write(`<p>12.-</p>`);
let array11 = ['c','c++','python','golang','solidity','typescript','javascript','java','go','pascal','scala',];



function piramideReverse(lista , i){
    lista.push(array11[i]);
}



for ( let i=1 ; i<array11.length ; i++){
    document.write(`<p>${array10}</p>`);
    piramideReverse(array10, i);
}
// for ( let i=1 ; i<array11.length ; i++){
//     document.write(`<p>${array10}</p>`);
//     array10.push(array11[i]);
// }




let arrayBi = [ 
                [2,3,7],
                [4,5,6,7],
                [7,8,9,7],
                [1]
              ];


console.log(arrayBi.length);
