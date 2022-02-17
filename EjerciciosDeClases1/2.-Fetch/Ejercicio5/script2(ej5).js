// Ejercicio 5.- Crear un HTML con un input y un botón. Al introducir el usuario un 
//	      país (en español) debe aparecer debajo la información completa de ese país.


let contris = [];// Variable para guardar los paises

// Recupero de manera asincrona los paises y los asocio a una variable
fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then ( response => response.json() )
.then ( data =>  {
    
    contris = data.countries;
    
});

console.log(contris);   
//     const pDom = document.querySelector('p');

//     // escucho al submit del formulario para actualizar el resultado
//     document.querySelector('form').addEventListener('submit', e =>{

//         pDom.innerHTML='';

//         e.preventDefault();// desactiva el method y action del formulario
//         const userSearch = e.target.search.value; // guardo el valor del input con nombre search
//         const country = contris.find( contry => contry.name_es === userSearch );
        
        
//         let ulDom = document.createElement('ul');
//         let liNameEnDom = document.createElement('li');
//         let liNameEsDom = document.createElement('li');
//         let liPreDom = document.createElement('li');
//         let liCodeDom = document.createElement('li');

//         liNameEnDom.textContent = `Nombre(EN): ${country.name_en}`;
//         liNameEsDom.textContent = `Nombre(ES): ${country.name_es}`;
//         liPreDom.textContent = `Prefijo: ${country.dial_code}`;
//         liCodeDom.textContent = `Codigo: ${country.code}`;

//         pDom.appendChild(ulDom);
//         ulDom.appendChild(liNameEnDom);
//         ulDom.appendChild(liNameEsDom);
//         ulDom.appendChild(liPreDom);
//         ulDom.appendChild(liCodeDom);
        
        

        

//     })

// });













