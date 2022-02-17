// Ejercicio 4.- Añadir un botón al anterior que tenga el texto "EN", al pulsarlo 
//	      cambiarán los nombres de los paises a su versión en inglés.

fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(result => result.json()) // llama a la promesa del fetch
.then(data => { // llama al jason

   let listCountries = data.countries;
   let divContainerDom = document.querySelector('.lista_contries');

   document.querySelector('.en').addEventListener('click' , e => {
        divContainerDom.innerHTML = '';
    
        listCountries.forEach(element => {
                const unorderList = document.createElement('ul');
                const listItemCountry = document.createElement('li');
                const listItemCode = document.createElement('li');
                const listItemPre = document.createElement('li');
                
                listItemCountry.textContent = element.name_en;
                listItemCode.textContent = element.code;
                listItemPre.textContent = element.dial_code;
                
                divContainerDom.appendChild(unorderList);
                unorderList.appendChild(listItemCountry);
                unorderList.appendChild(listItemCode); 
                unorderList.appendChild(listItemPre);
         });
   });

   document.querySelector('.es').addEventListener('click' , e => {
            
            divContainerDom.innerHTML = '';

            listCountries.forEach(element => {
                const unorderList2 = document.createElement('ul');
                const listItemCountry2 = document.createElement('li');
                const listItemCode2 = document.createElement('li');
                const listItemPre2 = document.createElement('li');
                
                listItemCountry2.textContent = element.name_es;
                listItemCode2.textContent = element.code;
                listItemPre2.textContent = element.dial_code;
                
                divContainerDom.appendChild(unorderList2);
                unorderList2.appendChild(listItemCountry2);
                unorderList2.appendChild(listItemCode2); 
                unorderList2.appendChild(listItemPre2);
            });
    });
  
});









