//1.- Crear una aplicación que presente un formulario donde se solicite:
//	-nombre
//	-edad
//	-hobby
//
// Al pulsar el botón, debe guardarse dicha información en memoria.
// Al refrescar el navegador, si existe información en memoria 
// (se ha hecho click previamente)debe mostrarse dicha información 
// debajo del formulario, en caso que el usuario vuelva a 
// introducir información y pulsar el botón, debemos actualizar
// los datos en memoria y mostrar los datos actualizados

    


// Inicializar la informacion del sessinStorage usando getItem
if ( sessionStorage.getItem('age') !== null ) {
      const storedNameValue = JSON.parse(sessionStorage.getItem('name'));
      const storedAgeValue = JSON.parse(sessionStorage.getItem('age'));
      const storedHobbieValue = JSON.parse(sessionStorage.getItem('hobbi'));

    
        // La informacion debe verse en un parrafo debajo del formulario
                // Crear la etiqueta parrafo para el nombre
                const pNameNodo = document.createElement('p');
                // Introducir propiedades en la etiqueta
                pNameNodo.textContent = `El ultimo nombre introducido es: ${storedNameValue}`;


                // Crear la etiqueta parrafo para la edad
                const pAgeNodo = document.createElement('p');
                // Introducir propiedades en la etiqueta
                pAgeNodo.textContent = `La ultima edad introducida es: ${storedAgeValue}`;


                // Crear la etiqueta parrafo para el hobbie
                const pHobbieNodo = document.createElement('p');
                // Introducir propiedades en la etiqueta
                pHobbieNodo.textContent = `El ultimo hobbie introducido es: ${storedHobbieValue}`;        


                // Introducir la informacion en el html
                        // Identificar el div donde se introduciran los datos del formulario
                        const divContainer = document.querySelector('[data-info-container]'); 
                        
                        // Limpiar lo anterior escrito en el div contenedor de datos
                        divContainer.innerHTML = ''; // Esto borrar todo lo anterior escrito

                        // Introducir los datos en el div contenerdor
                        divContainer.appendChild(pNameNodo);
                        divContainer.appendChild(pAgeNodo);
                        divContainer.appendChild(pHobbieNodo);      


                
}



// Al pulsar en el boton aceptar dicha informacion debe guardarse en memoria

// Escucho al submit del formulario
document.querySelector('.form_container').addEventListener( 'submit', element =>{
        element.preventDefault(); // Con preventDefault elimino el comportamiento
                                  // por defecto de los formularios
                                  // esto evita que se produzca la redireccion a donde diga el 
                                  // action del form, elimina el action y method

        // Obtengo el nodo del formulario
        const elementForm = element.target; 


        // obtengo el input del formulario cuyo atributo name es igual a 'nombre'
        const inputName = elementForm.nombre; 
        // Guardo en el session el valor del input name="nombre"
        sessionStorage.setItem('name', JSON.stringify(inputName.value) );                                                         


        // obtengo el input del formulario cuyo atributo name es igual a 'edad'
        const inputAge = elementForm.edad; 
        // Guardo en el session el valor del input name="edad"
        sessionStorage.setItem(  'age' , JSON.stringify(inputAge.value) ); 


        // obtengo el input del formulario cuyo atributo name es igual a 'hobi'
        const inputHobbit = elementForm.hobi; 
        // Guardo en el session el valor del input name="hobi"
        sessionStorage.setItem(  'hobbi' , JSON.stringify(inputHobbit.value) ); 


// La informacion debe verse en un parrafo debajo del formulario
        // Crear la etiqueta parrafo para el nombre
        const pNameNodo = document.createElement('p');
        // Introducir propiedades en la etiqueta
        pNameNodo.textContent = `El ultimo nombre introducido es: ${inputName.value}`;


        // Crear la etiqueta parrafo para la edad
        const pAgeNodo = document.createElement('p');
        // Introducir propiedades en la etiqueta
        pAgeNodo.textContent = `La ultima edad introducida es: ${inputAge.value}`;


        // Crear la etiqueta parrafo para el hobbie
        const pHobbieNodo = document.createElement('p');
        // Introducir propiedades en la etiqueta
        pHobbieNodo.textContent = `El ultimo hobbie introducido es: ${inputHobbit.value}`;        


        // Introducir la informacion en el html
                // Identificar el div donde se introduciran los datos del formulario
                const divContainer = document.querySelector('[data-info-container]'); 
                
                // Limpiar lo anterior escrito en el div contenedor de datos
                divContainer.innerHTML = ''; // Esto borrar todo lo anterior escrito

                // Introducir los datos en el div contenerdor
                divContainer.appendChild(pNameNodo);
                divContainer.appendChild(pAgeNodo);
                divContainer.appendChild(pHobbieNodo);
} )





