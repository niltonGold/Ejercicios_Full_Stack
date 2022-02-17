// 1.- Crear una promesa que cuando se resuelva tras 5
//     segundos muestre un <p>Hello World</p> en el navegador.


// const promesa1 = new Promise( (resolve) => { 

//     setTimeout ( () => { 
//         resolve('ok'); // Al llegar aca se esperara 5 segundos
//      } , 5000 ) ;      // y luego ejecutara lo de promesa1 value

// });




// promesa1.then( 
      
//     (value) => {
        
//         const parrafo = document.createElement('p');
//         parrafo.textContent = 'Hello World';

//         document.body.appendChild(parrafo);

//         console.log(value);
//     } 
    
// );



// 2.- Colocar un botón en el navegador que al pulsarlo 
//  nos dibuje los números del 0 al 10. Entre elemento y 
//  elemento debe transcurrir 0.5 segundos. 




document.getElementById('btn').addEventListener(  'click' , e => {
    
    let contador = 0;
    
        
    let intervalo = setInterval( () => {
            

            let parrafNumeros = document.createElement('p');
            parrafNumeros.textContent = contador;
            document.body.appendChild(parrafNumeros);
            contador++ ;

            if (contador === 11){
                clearInterval(intervalo);
            }


        }, 500);

    

    


});




