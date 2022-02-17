// Parte 3. Modificar el ejercicio 2 para que cuando el usuario refresque 
//     la página, el p se inicialice con el valor que había dejado antes

// Para guardar y actualizar la informacion se us el sessionStorage.setItem
// Para capturar la informacion se usa el sessionStorage.geItem    

// Identicar el parrafo donde se mostrara el resultado
const parrafoResult = document.getElementById('resultado');


 


// Insertar propiedades al parrafo creado
// Y Recuperar los datos introducidos despues de refrescar la pagina
let num = sessionStorage.getItem('counter');
let acumuladorResult = num !== null // si num es diferente de null entonces
                        ? num // num sigue valiendo lo mismo
                        : 0 ; // si no valdra 

parrafoResult.textContent = acumuladorResult;


        
        
        


// Crear el evento para la suma
        // 1.- Identificar el boton suma
        const btnSuma = document.getElementById('+');
        
        // 2.- Evento click sobre el boton suma
        btnSuma.addEventListener(  'click' , () => {
                // 3.-Insertar en el parrafo el resultado
                parrafoResult.textContent = acumuladorResult += 1;

                // Los set deben estar dentro de los eventos
                sessionStorage.setItem( "counter" , parrafoResult.textContent );
        });



// Crear el evento para la resta
        // 1.- Identificar el boton resta
        const btnResta = document.getElementById('-');
        
        // 2.- Evento click sobre el boton resta
        btnResta.addEventListener(  'click' , () => {
                // 3.-Insertar en el parrafo el resultado
                parrafoResult.textContent = acumuladorResult -= 1;

                // Los set deben estar dentro de los eventos
                sessionStorage.setItem( "counter" , parrafoResult.textContent );
        });



