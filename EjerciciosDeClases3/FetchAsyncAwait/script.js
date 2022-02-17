// async function printBiggestCountry(){

//     const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const d = await r.json();
//     d.countries.sort((a,b) => a.name_en.length - b.name_en.length);
//     const p = document.createElement('p');
//     p.textContent = d.countries.pop().name_en;
//     document.body.appendChild(p);

//   }

//   printBiggestCountry();



// --------------------------------------------------------------------------------------------------------






// 1- Pintar en el HTML los paises que tengan 4 letras en su nombre en castellano



// fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
// .then(result => result.json()) // llama a la promesa del fetch
// .then(data => { // llama al jason
//    let listCountries = data.countries.filter((a) => a.name_es.length === 4);
//    listCountries.forEach(element => {
//             const p = document.createElement('p');
//             p.textContent = element.name_es;
//             document.body.appendChild(p);    
//      });
   
  
// });



// --------------------------------------------------------------------------------------------------------

//2.- Pintar en el HTML un listado de todos los paises estructurado 
//7omo un "listín telefónico" en que veamos pais (en español),
//codigo de pais, prefijo



        // fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
        // .then(result => result.json()) // llama a la promesa del fetch
        // .then(data => { // llama al jason
        //    let listCountries = data.countries;
        //    listCountries.forEach(element => {
        //             const unorderList = document.createElement('ul');
        //             const listItemCountry = document.createElement('li');
        //             const listItemCode = document.createElement('li');
        //             const listItemPre = document.createElement('li');
                    

        //             listItemCountry.textContent = element.name_es;
        //             listItemCode.textContent = element.code;
        //             listItemPre.textContent = element.dial_code;
        //             document.body.appendChild(unorderList);
        //             document.body.appendChild(listItemCountry);
        //             document.body.appendChild(listItemCode); 
        //             document.body.appendChild(listItemPre);    
        //      });
        
        
        // });



// --------------------------------------------------------------------------------------------------------



//3.- Añadir un botón al anterior que tenga el texto "EN",
// al pulsarlo cambiarán los nombres de los paises 
// a su versión en inglés.


fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(result => result.json()) // llama a la promesa del fetch
.then(data => { // llama al jason

   let listCountries = data.countries;
   let divContainer1 =  document.getElementById('lista_es') 

   document.querySelector('.en').addEventListener('click' , e => {
        divContainer1.innerHTML = '';
    

        listCountries.forEach(element => {
                const unorderList = document.createElement('ul');
                const listItemCountry = document.createElement('li');
                const listItemCode = document.createElement('li');
                const listItemPre = document.createElement('li');
                

                listItemCountry.textContent = element.name_en;
                listItemCode.textContent = element.code;
                listItemPre.textContent = element.dial_code;
                divContainer1.appendChild(unorderList);
                divContainer1.appendChild(listItemCountry);
                divContainer1.appendChild(listItemCode); 
                divContainer1.appendChild(listItemPre);
         });
   });






   document.querySelector('.es').addEventListener('click' , e => {
            
            divContainer1.innerHTML = '';

            listCountries.forEach(element => {
                        const unorderList = document.createElement('ul');
                        const listItemCountry = document.createElement('li');
                        const listItemCode = document.createElement('li');
                        const listItemPre = document.createElement('li');
                        

                        listItemCountry.textContent = element.name_es;
                        listItemCode.textContent = element.code;
                        listItemPre.textContent = element.dial_code;
                        divContainer1.appendChild(unorderList);
                        divContainer1.appendChild(listItemCountry);
                        divContainer1.appendChild(listItemCode); 
                        divContainer1.appendChild(listItemPre);
            });
    });
  


});



// --------------------------------------------------------------------------------------------------------

// 4.- Crear un HTML con un input y un botón. Al introducir 
// el usuario un país (en español) debe aparecer 
// debajo la información completa de ese país


// let pais = document.querySelector('.pais');
// console.log(pais.innerHTML);

// document.querySelector('.btn_pais').addEventListener('click', e =>{

    
//        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
//                 .then(result => result.json()) // llama a la promesa del fetch
//                 .then(data => { // llama al jason
//                    let listCountries = data.countries;
//                    listCountries.forEach(element => {
//                             if (element.name_es == pais.value){
//                             const unorderList = document.createElement('ul');
//                             const listItemCountry = document.createElement('li');
//                             const listItemCode = document.createElement('li');
//                             const listItemPre = document.createElement('li');
                            


//                             listItemCountry.textContent = element.name_es;
//                             listItemCode.textContent = element.code;
//                             listItemPre.textContent = element.dial_code;
//                             document.body.appendChild(unorderList);
//                             document.body.appendChild(listItemCountry);
//                             document.body.appendChild(listItemCode); 
//                             document.body.appendChild(listItemPre); 
//                             }else{console.log('error')};
                           
//                      });
                
                
//                 });


// });


// --------------------------------------------------------------------------------------------------------
