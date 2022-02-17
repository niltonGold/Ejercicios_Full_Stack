const parrafo = document.createElement('p');
parrafo.textContent = 'Alex Presidente';
parrafo.classList.add('primer_parrafo');
document.body.appendChild(parrafo);

// recuperar todos los li de la página
const todosLosLi = document.querySelectorAll('li');
console.log(todosLosLi);


// recuperar todos los elementos con clase "item"
const todosLosItem = document.querySelectorAll('.item');
console.log(todosLosItem);


// recuperar el elemento con id="CUARTO_ELEMENTO"
const recuperarPorId = document.getElementById('CUARTO_ELEMENTO');
console.log(recuperarPorId);

// recuperar los elementos que tengan atributo data-demo
const atributosDataDemo = document.querySelectorAll('[data-demo]');
console.log(atributosDataDemo);


// cambiar el texto de todos los elementos que tengan la clase "special" a "Special cambiado"
const specialCambio = document.querySelectorAll('.special');
specialCambio.forEach( e => e.textContent = 'Special Cambiado' );
    // los cambios se pueden ver a los debtools en la pestaña de elements


// cambiar el tamaño de la letra como estilo en linea de los elementos con
// atributo data-demo="Atributo Custom"
const cambioSize = document.querySelectorAll('[data-demo="Atributo Custom"]');
cambioSize.forEach( e => e.style='font-size:48px;' );



// crear un li que tenga un id="CREADO_CUSTOM" y añadirlo al ultimo
// hijo del ul
const nuevoLi = document.createElement('li');
nuevoLi.id = 'CREADO_CUSTOM';
const listaDelDom = document.querySelector('.container');
listaDelDom.appendChild(nuevoLi);



