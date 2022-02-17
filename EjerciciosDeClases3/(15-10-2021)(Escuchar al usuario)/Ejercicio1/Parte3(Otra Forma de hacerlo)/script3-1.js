

// Obtengo el p con el valor del contador
const counterDom = document.getElementById('resultado');

// inicializacion de la session storage
counterDom.textContent = sessionStorage.getItem('counter') !== null   
                                                            ? JSON.parse(sessionStorage.getItem('counter'))
                                                            : 0;

document.getElementById('+').addEventListener(  'click' , () => {
        counterDom.textContent = parseInt(counterDom.textContent) + 1;

        sessionStorage.setItem(  'counter' , JSON.stringify(counterDom.textContent) );
})                                                            


document.getElementById('-').addEventListener(  'click' , () => {
        counterDom.textContent = parseInt(counterDom.textContent) - 1;

        sessionStorage.setItem(  'counter' , JSON.stringify(counterDom.textContent) );
})                                                            


