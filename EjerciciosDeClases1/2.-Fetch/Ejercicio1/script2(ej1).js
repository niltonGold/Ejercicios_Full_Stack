// Ejercicio 1.- Recuperar la informacion de ciudades
//               de una url


console.log('Antes del fetch');

fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then ( response => response.json() )
.then ( data => {
    data.countries.sort( (a,b) => a.name_en.length - b.name_en.length );
    console.log(data);
});
console.log('despues del fetch');








