// Ejercicio2. Crear un endpoint de tipo PUT (con la página de beeceptor)
//      con el siguinete pah (/primer-put) que no responda nada en el
//      body y mandarle la siguiente información: 
//
// {
//  status: 'Encantado con lo que aprendo'
// }




fetch('https://nilton2.free.beeceptor.com/pokemons-nil')
.then( r => r.json())
.then( d => {  

    fetch(d.url)
    .then( r1 => r1.json())
    .then( d1 => {

        console.log(d1);
        
    }) 
    

        
})









