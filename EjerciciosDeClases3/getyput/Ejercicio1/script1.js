// Ejercicio1.- Crear un Endpoint (una URL con datos) de tipo 
//      GET con la página designer.mocky.io, 
//      con la siguiente respuesta (200 ok):
//
// {
// name: 'Madrid',
//  image: 'https://www.collegiate-ac.es/propeller/uploads/sites/3/2019/10/city-hero-madrid-1450x742.jpg'
// }
//
// Pintar la imagen de Madrid en el body


fetch('https://run.mocky.io/v3/821f10a1-1993-4df6-82dc-ff0397e73534')
.then( r =>  r.json() )
.then( d => { 
    console.log(d.name);
    let imagen = document.createElement('img');
    imagen.src = d.image;
    document.body.appendChild(imagen);
});