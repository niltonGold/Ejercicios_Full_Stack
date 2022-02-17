// Ejercicio2. Crear un endpoint de tipo PUT (con la página de beeceptor)
//      con el siguinete pah (/primer-put) que no responda nada en el
//      body y mandarle la siguiente información: 
//
// {
//  status: 'Encantado con lo que aprendo'
// }

const segundoPut = {
    method: 'PUT',
    body: JSON.stringify({ status:  'Encantado con lo que apren' })
}


fetch('https://nilton.free.beeceptor.com/primer-put2',segundoPut)
.then( r => console.log(r) )









