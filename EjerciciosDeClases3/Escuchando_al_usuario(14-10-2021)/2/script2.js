// escuchar el click de un boton
// const boton = document.getElementById('el_boton');

//document.addEventListener('click' , e => { document.body.style = 'color:red;' ; })

// const parrafo = document.createElement('p');
// parrafo.textContent = 'añadido desde JS';




// boton.addEventListener('click' , e => { 
//     console.log(e.target) ; 
// })


// const nuevoPdentroDeDiv = document.querySelector('.div_1');

// boton.addEventListener('click' , function() {
//     nuevoPdentroDeDiv.appendChild(parrafo)} 
// );


let botonSuma = document.querySelector('.sumar');

let botonResta = document.querySelector('.restar');

let parrafo = document.querySelector('.resultado');


let acumulador = 0;

botonSuma.addEventListener('click' , 
    function() {
        acumulador += 1; 
        parrafo.textContent = acumulador; 
    }
);

botonResta.addEventListener('click' , 
    function() {
        acumulador -= 1; 
        parrafo.textContent = acumulador; 
    }
);









