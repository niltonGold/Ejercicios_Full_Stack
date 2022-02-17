//  Ejercicio3.- En un HTML tener un botón que 
//      cuando se haga click se envíe el PUT del ejercicio 2




document.querySelector('.enviar_put').addEventListener('click', e =>{
    const tercerPut = {
        method: 'PUT',
        body: JSON.stringify({ status:  'Encantado lo que aprendero(boton put)' })
    }
    fetch('https://nilton.free.beeceptor.com/primer-put2',tercerPut)
    .then( r => console.log(r) )


})












