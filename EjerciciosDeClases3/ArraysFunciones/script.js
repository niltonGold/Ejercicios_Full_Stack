document.write(`<p>Array . find() </p>`)
/* Find() recorre el array y devuelve un solo valor,  */
/* devuelve el primer valor que cumple con la condicion, solo el primero que lo cumple */
const array1 = [55,45,6,40,50];

const found = array1.find(valor => valor > 10);
    /* valor.- en cada iteraccion valor tomara el valor del contenido */
    /* contenido de la posicion del array */
document.write(found);


/* findIndex recore el array y me devuelve la posicion del primer elemento */
/* que cumpla con la condicion dada, solo el primero que lo cumple*/
document.write(`<p>Arry . findIndex() </p>`)
const array2 = [5,12,8,130,44];
const funcionNumber = (element) => element > 30;
document.write(array2.findIndex(funcionNumber));

/* Otra forma de hacerlo */
const findIndice = array2.findIndex(element => element === 12);
document.write(`<div>${findIndice}</div>`);



/* El for each recorre el array elmento a elemento y ejecuta la funcion*/
/* dada por cada elemento del array*/
document.write(`<p>Arry . ForEach() </p>`)
const arrayfe = ['a','b','c'];
arrayfe.forEach( element => document.write(element) );



/* me devuelve TRUE si el elemento que esta en el array */
/* me devuelve FALSE si el elemento que busco no esta el*/
document.write(`<p>Arry . includes() </p>`)
const arrayinclu = [1,2,3];
const esta = arrayinclu.includes(5);
document.write(esta);


