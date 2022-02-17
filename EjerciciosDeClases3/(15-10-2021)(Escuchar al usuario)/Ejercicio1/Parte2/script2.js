//Parte 2. Contador: Crear un HTML con un botón (-) un p y otro botón (+).
// El p inicialmente mostrará 0. Cuando pulse en el + se deberá 
// sumar uno al valor del p. Cuando pulse en el menos se deberá restar 1.

    

// Identicar el parrafo donde se mostrara el resultado
const parrafoResult = document.getElementById('resultado');


// Crear un variable contador que almacenara el calculo matematico
let acumuladorResult = 0;


// Insertar propiedades al parrafo creado
parrafoResult.textContent = acumuladorResult;

// Crear el evento para la suma
        // 1.- Identificar el boton suma
        const btnSuma = document.getElementById('+');
        
        // 2.- Evento click sobre el boton suma
        btnSuma.addEventListener(  'click' , () => {
                // 3.-Insertar en el parrafo el resultado
                parrafoResult.textContent = acumuladorResult += 1;
        });



// Crear el evento para la resta
        // 1.- Identificar el boton resta
        const btnResta = document.getElementById('-');
        
        // 2.- Evento click sobre el boton resta
        btnResta.addEventListener(  'click' , () => {
                // 3.-Insertar en el parrafo el resultado
                parrafoResult.textContent = acumuladorResult -= 1;
        });



