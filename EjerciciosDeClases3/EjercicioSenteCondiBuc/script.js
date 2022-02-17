document.write(`<pre>Ejercicios Sentencias Condicionales y bucles</pre>`);

document.write(`<pre>- Escribir un programa que dado dos números muestre en el navegador el mayor de ellos</pre>`);
let num1 = 10;
let num2 = 12;
document.write(Math.max(num1,num2)); 



document.write(`<pre>- Escribir un programa que dadas 2 frases muestre en el navegador la más larga</pre>`);
let string1 = `hola`;
let string2 = `nos vemos`;
if ( string1.length > string2.length ) {
    document.write(`<pre>La frase mas larga es "${string1}"</pre>`);
} if ( string1.length === string2.length ){
    document.write(`<pre>Las frases "${string1}" y "${string2}" tienen la misma longitud</pre>`);
}else{
    document.write(`<pre>La frase mas larga es "${string2}"</pre>`);
}


document.write(`<pre>- Escribir un programa que recorra los enteros desde 0 hasta una</pre>`);
document.write(`<pre>  variable dada por prompt y vaya mostrando en el navegador si esos</pre>`);
document.write(`<pre>  son pares o impares. Además deberán mostrarse por consola</pre>`);
let num3 = parseInt(prompt("Escribe un numero entero"));

let listaNumerica = '<pre>';
let i1;
for ( let i1=0; i1<num3 ; i1=i1+1 ) {
    listaNumerica = listaNumerica + ` ${i1} ; `;
}
listaNumerica = listaNumerica + `${num3}</pre>`;
document.write(listaNumerica);

document.write(`<pre>- Escribir un programa que recorra los número del 1-100 e imprima por pantalla</pre>`);
document.write(`<pre>     Fizz, si es multiplo de 3</pre>`);
document.write(`<pre>     Buzz, si es múltiplo de 5</pre>`);
document.write(`<pre>     FizzBuzz, si es múltiplo de 3 y 5 a la vez</pre>`);

let i2;
for ( let i2=1 ; i2<=100 ; i2=i2+1 ) {
    if ( i2%3 == 0 ) {
        document.write(`<pre>${i2} es multiplo de 3</pre>`);
    } 
    
    if ( i2%5 == 0  ) {
        document.write(`<pre>${i2} es multiplo de 5</pre>`);
    }
    
    if ( (i2%3 == 0) && (i2%5 == 0) ) {
        document.write(`<pre>${i2} es multiplo de 3 y de 5</pre>`);
    }

}


document.write(`<pre>- Escriba por pantalla un programa que pinte un cierto patron por consola</pre>`);
let altura = 4;
let i5;
let j1;
let piramide='';
for ( let i5=0 ; i5<=altura ; i5=i5+1 ){
    piramide = piramide + `<p> `;
    for ( let j1=1 ; j1<=i5+1 ; j1=j1+1 ) {
        piramide = piramide + ` * `;
    }
    piramide = piramide + `</p>`;
}
document.write(piramide);



let alturab = 4;
let i6;
let j2;
let piramideb=''; 
for ( let i6=alturab ; i6>=1 ; i6=i6-1 ) {
    piramideb = piramideb + `<p> `;
    for ( let j2=i6 ; j2>=1 ; j2=j2-1 ) {
        piramideb = piramideb + ` * `;
    }
    piramideb = piramideb +`</p>`;
}
document.write(piramideb);

/* -------------------------------------------------------- */



let ifibo = 2;
let array = [0,1];
document.write(`${array[0]}  ${array[1]}`);
while( ifibo < 10 ){
    array[ifibo] = array[ifibo-1] + array[ifibo-2];
    document.write( ` ${array[ifibo]} `);
    ifibo=ifibo+1;
}
