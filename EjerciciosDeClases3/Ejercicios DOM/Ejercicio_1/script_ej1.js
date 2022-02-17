// 1.- Crear el elemento html 
const parrafo = document.createElement('p');// esto me crea una etiqueta p de html, y me lo
                                            // guarda en la constante parrafo




// 2.- Asignar cosas al elemento html creado
    // -Le añado a la etiqueta creada texto
    parrafo.textContent = 'Axel presidente';
    
    // - Le añado a la etiqueta creada una clase css
    parrafo.classList.add('texto_verde');



// 3.- Insertar la etiqueta creada en el DOM
    // 3.1.- Identificar el padre donde insertare la etiqueta
    document.body.appendChild(parrafo);
        // como el padre en este caso es el body, no necesito buscarlo
        // bastara con un document.body para ubicar el padre   


                                            








