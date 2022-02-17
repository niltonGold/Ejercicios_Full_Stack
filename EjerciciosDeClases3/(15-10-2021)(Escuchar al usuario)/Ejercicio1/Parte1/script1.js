// Parte 1- crear un archivo HTML que tenga un div vacío y un boton (añadir). 
//     Cada vez que pulse en el botón se debe añadir un p con
//     el texto añadido desde JS dentro del div

    


    
// Identificar el nodo padre donde insertare el hijo
const nodoPadre = document.querySelector('[data-container]');

// Identifico el boton donde se producira el evento
const btn = document.getElementById('add');

// Crear el evento que al hacer click sobre el boton introducira el p
    btn.addEventListener('click' , () => {
            // 1.-Crear la etiqueta p que añadire dentro del div
            const itemP = document.createElement('p');

            // 2.-Añadir propiedades a la etiqueta creada
            itemP.textContent = 'parrafo';

            // 3.-Inserto en el padre
            nodoPadre.appendChild(itemP);
    });    





