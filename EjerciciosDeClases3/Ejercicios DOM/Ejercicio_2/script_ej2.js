// Recuperar todos los li de la página
const listItemsDom = document.querySelectorAll('li');
console.log(listItemsDom);// el querySelectorAll me devuelve
                          // un array con una lista, en este 
                          // caso me devuelve una lista de todas
                          // las etiquetas li



// Recuperar todos los elementos con clase "item"
const listItemsDomClasses = document.querySelectorAll('.item');
console.log(listItemsDomClasses);



// Recuperar el elemento con id="CUARTO_ELEMENTO"
const fourthItem = document.getElementById('CUARTO_ELEMENTO');
console.log(fourthItem);


//Recuperar los elementos que tengan atributo data-demo
const dataDemoDom = document.querySelectorAll('[data-demo]');
console.log(dataDemoDom);


// Cambiar el texto de todos los elementos que tengan la clase
// "special" a "Special cambiado"
    // Buscar las etiquetas con la clase .special y seleccionarlos
    let specialList = document.querySelectorAll('.special');

    // Recorrer los elementos uno a uno y cambiar el contenido de sus textos
    specialList.forEach( e => e.textContent = 'Special Cambiado');




// Cambiar el tamaño de letra como estilo en linea de los
// elementos con atributo data-demo="Atributo Custom"
    // Seleccionar los elementos que se modificaran
    let dataItemDemo = document.querySelectorAll('[data-demo="Atributo Custom"]');

    // Recorrer los elementos encontrados y modificarlos
    dataItemDemo.forEach( element => {
        element.style = 'font-size:48px;'
    });


// Crear un li que tenga un id="CREADO_CUSTOM" y añadirlo como último 
// hijo del ul
    // Crear la etiqueta
    let liItem = document.createElement('li');

    // Le agrego propiedades a la etiqueta creada
    liItem.id = 'CREADO_CUSTOM';

    // Buscar la etiqueta padre donde metere la etiqueta creada antes
    let nodoFather = document.querySelector('.container');
    
    // En la etiqueta padre encontrada anexarle el hijo
    nodoFather.appendChild(liItem);


