// Ejercicio1.- Probar los endpoints que tenemos montados de 
//      la mañana para que devuelvan códigos de error. 
//      Navegar en el Network de las devtools para localizar
//      y analizar la información de la petición.



// const tercerPut = {
//     method: 'PUT',
//     body: JSON.stringify({ status:  'Encantado lo que aprendero(boton put)' })
// }

fetch('https://nilton2.free.beeceptor.com/prueba-ej2')
.then( r => {
    console.log(r);
    if (r.status===404){
        document.write('mensaje error');
    }
    else if(r.status===200){
        document.write('mensaje ok');
    }
    r.json()} )
.then( d => console.log(d))




