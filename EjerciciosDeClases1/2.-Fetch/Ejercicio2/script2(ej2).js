// Ejercicio 2.- Pintar en el html los paises que tengan 
//              4 letras en su nombre en castellano


console.log('Antes del fetch');

fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then ( response => response.json() )
.then ( data => {
    data.countries.forEach(element => {
            let lengthWord = element.name_es.length;
            if ( lengthWord === 4 ) {
                let paragraphDom = document.createElement('p');
                paragraphDom.textContent = element.name_es;
                document.body.appendChild(paragraphDom);
            }
    });
});
console.log('despues del fetch');








