//Ejercicio 1: Recuperar la información de pikachu del 
//  API de pokemon y mostrar en la web su imagen 
//  frontal y su nombre


let pokemonArray = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=150') // con fetch llama a la api donde esta la informacion de todos los pokemon
.then(resultado => resultado.json()) // con el primer then recibo los datos de la api, las convierto a formato json 
.then(data =>  {pokemonArray = data.results

    let urlPikachu = '';
    pokemonArray.forEach( (e,i) => {
                        if ( e.name === 'pikachu'){
                            urlPikachu = e.url;
                            
                        }
                        
    });
   
   
    console.log(urlPikachu);
    fetch(urlPikachu)
    .then(resultado => resultado.json())
    .then( data => { let datosPikachu = data;
        
             
    // Crear el div que contrendra todos los cards
        let divCardsContainer = document.createElement('div');
        // le agrego una clase al div creado
        divCardsContainer.classList.add('cards_container');
    


    // Crear el div donde estara la informacion de pikachu
        let divPikachuContainer = document.createElement('div');
        divPikachuContainer.classList.add('card');    


        //Crear la etiqueta image donde ira la imagen de pikachu
            let imagenPikachu = document.createElement('img');
            //Le agrego propiedades a la imagen de pikachu
            imagenPikachu.setAttribute('src', `${datosPikachu.sprites.front_default}`);

        //Crear los parrafos con la informacion de pikachu
            
            // parrafo con el nombre
            let parrafoName = document.createElement('p');
            //Agregarle el texto al parrafo con nombre
            parrafoName.textContent = datosPikachu.name.charAt(0).toUpperCase()+ datosPikachu.name.slice(1);
        
            // parrafo con el id
            let idParrafo = document.createElement('p');
             //Agregarle el texto al parrafo con el id
            idParrafo.textContent = datosPikachu.id;


          



        // Agregar al div de pikachu su imagen he informacion
            divPikachuContainer.appendChild(imagenPikachu);
            divPikachuContainer.appendChild(parrafoName);
            divPikachuContainer.appendChild(idParrafo);
            




    
    document.body.appendChild(divCardsContainer);// Agrego al body el div contenedor de todos los cards    
    let divContenerdordeCards = document.querySelector('.cards_container');// el Agrego al contenedor de cards 1 el div de card de pikachu
        divContenerdordeCards.appendChild(divPikachuContainer);
               

        
   



    })

});













