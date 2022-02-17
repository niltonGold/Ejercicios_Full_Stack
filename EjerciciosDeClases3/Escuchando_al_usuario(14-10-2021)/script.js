// escuchar el click de un boton
const boton = document.getElementById('el_boton');

//document.addEventListener('click' , e => { document.body.style = 'color:red;' ; })

const parrafo = document.createElement('p');
parrafo.textContent = 'añadido desde JS';




// boton.addEventListener('click' , e => { 
//     console.log(e.target) ; 
// })


const nuevoPdentroDeDiv = document.querySelector('.div_1');

boton.addEventListener('click' , function() {
    nuevoPdentroDeDiv.appendChild(parrafo)} 
);













