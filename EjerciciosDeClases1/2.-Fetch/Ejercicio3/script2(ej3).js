//Ejercicio 3.- Pintar en el HTML un listado de todos los paises estructurado como un "listín 
//	      telefónico" en que veamos pais (en español), codigo de pais, prefijo

console.log('Antes del fetch');

fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then ( response => response.json() )
.then ( data => {
    data.countries.forEach(element => {
            // Crear el ul
            let listContainerDom = document.createElement('ul');
            //listContainerDom.classList('country_list');

            // Crear elementos li
            let listItemCountry = document.createElement('li');
            let listItemCode = document.createElement('li');
            let listItemDialCode = document.createElement('li');

            // Insertar el contenido en los li
            listItemCountry.textContent = element.name_es;
            listItemCode.textContent = element.code;
            listItemDialCode.textContent = element.dial_code;

            // Insertar en el body del dom
            document.body.appendChild(listContainerDom);
            listContainerDom.appendChild(listItemCountry);
            listContainerDom.appendChild(listItemCode);
            listContainerDom.appendChild(listItemDialCode);
                 
    });
});
console.log('despues del fetch');








