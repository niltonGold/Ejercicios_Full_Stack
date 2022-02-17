// 1.-Crear un documento html con un body vacio.

// 2.- Crear un objeto que represente una ciudad y que tenga los 
//     siguientes atributos,
//      -nombre  
//      -description  
//      -urlImagen 
//      -coordenadas
//          -latitud  -longitud

let ciudad = {
    nombre: 'Madrid',
    description: 'centro',
    pais: 'España',
    urlImagen: 'https://viajes.nationalgeographic.com.es/medio/2021/05/12/madrid_987c90d2_1254x836.jpg', 
    coordenadas : {
        latitud: -46.000,
        longitud: 48.000
    }
}



// 3.- Generer un HTML con JS con una formato similar a la foto de abajo,
//     con los datos de la ciudad de la variable del ejercicio anterior

    // paso 1 crear el elemento o etiqueta html
let containerDivA = document.createElement('div');
    
    // agregarle texto
containerDivA.textContent='hola';

    // agregarle atributos ,clases, id
containerDivA.classList.add('div_ciudad');
    
    // agregarlo al dom
document.body.appendChild(containerDivA);        


    // agregarle al div dos hijos
let divHijoImagen = document.createElement('img');    
let divHijoTexto = document.createElement('div');



//divHijoTexto.classList.add('ciudad_descripcion');
//divHijoTexto.textContent = ciudad.nombre;
//divHijoTexto.textContent = ciudad.description;
//divHijoTexto.textContent = ciudad.pais;
//divHijoTexto.textContent = ciudad.coordenadas.latitud;
//divHijoTexto.textContent = ciudad.coordenadas.longitud;

let divCiudad = document.querySelector('.div_ciudad');

divCiudad.appendChild(divHijoImagen);
divCiudad.appendChild(divHijoTexto);


    // agregar a la etiqueta imagen un atributo 
let etiquetaImagen = document.querySelector('img');
etiquetaImagen.setAttribute('src', ciudad.urlImagen );    
etiquetaImagen.setAttribute('width', '200rem' );    
etiquetaImagen.setAttribute('height', '200rem' );


    // agregar a la etiqueta div texto los datos









