let originalPokemonList = []; // array global con la información de los pokemon

function generatePokemonTypeListDOM(types) {
    // dado una lista de tipos, generar su HTML y devolverlo
    const pokemonTypeListDOM = document.createElement('ul');
    pokemonTypeListDOM.classList.add('pokemon__list-type');

    types.forEach(t => { // type es un array de objetos que tiene dentro lso tipos
        const pokemonTypeListItemDOM = document.createElement('li');
        // el nombre se encuentra en estos atributos de la info que me manda el servidor
        pokemonTypeListItemDOM.textContent = t.type.name;
        pokemonTypeListDOM.appendChild(pokemonTypeListItemDOM);
    })

    return pokemonTypeListDOM;
}

/**
    <div class="pokemon-card__container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
      <h2>Bulbasaur</h2>
      <ul class="pokemon__list-type">
        <li>Grass</li>
        <li>Poison</li>
      </ul>
    </div>
   */
function drawPokemon(pokemon) {
    // genera el HTML de un pokemon
    const pokemonContainerDOM = document.createElement('div');
    pokemonContainerDOM.classList.add('pokemon-card__container');
    pokemonContainerDOM.setAttribute('data-id', pokemon.id);
    pokemonContainerDOM.addEventListener('click', e => {
        // selecciono el container del elemento clickado
        const cardDOM = document.querySelector(`[data-id="${pokemon.id}"`); 
        // clono el elemento con todos sus hijos (deep=true) para poder modificarlo sin modificar el original
        const cardCopy = cardDOM.cloneNode(true); 
        const pDOM = document.createElement('p');
        pDOM.textContent = `El peso es: ${pokemon.weight}`;
        cardCopy.appendChild(pDOM);
        document.querySelector('.pokedex__container').style = 'display:none;';
        document.body.appendChild(cardCopy);
    })

    const pokemonIMGDOM = document.createElement('img');
    pokemonIMGDOM.src = pokemon.sprites.front_default; // obtengo el src de la imagen del backend

    const pokemonNameDOM = document.createElement('h2');
    pokemonNameDOM.textContent = pokemon.name;

    pokemonContainerDOM.appendChild(pokemonIMGDOM);
    pokemonContainerDOM.appendChild(pokemonNameDOM);
    pokemonContainerDOM.appendChild(generatePokemonTypeListDOM(pokemon.types));

    document.querySelector('.pokedex__container').appendChild(pokemonContainerDOM);
}

function undrawPokemonList() {
    document.querySelector('.pokedex__container').innerHTML = '';
}

/**
 *1. Llama al servidor recuperando los pokemon
 *2. devuelve la lista de pokemon
 */
async function retrievePokemonList(limit = 150, offset = 0) { // establezco valores por defecto a los parámetro
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const pokemonList = await r.json();
    return pokemonList.results; // esto es lo que se envía en el fulfill de la promesa
}
// esta función devuelve un Promesa, que cuando esta fulfilled, 
// devuelve un array de objetos ({name, url})


async function retrievePokemon(url) {
    // se encarga de devolver la información del pokenon dada la url del pokemon
    const r = await fetch(url);
    const pokemonInfo = await r.json();
    return pokemonInfo;
} // esta función devuelve una promesa que cuando esta fulfilled devuelve le objeto con el pokemon


async function retrievePokemonListFromAPI(){
    // va al API y me guarda en el array global la lista de pokemons con ta su información
    const pokemonList = await retrievePokemonList();
    // aqui tendría la lista de pokemon cuando termina la asincronía de retrievePokemonList
    const pokemonPromisesList = pokemonList.map(async p => {
        // busco la información del pokemon que estoy actualmente iterando
        const pokemon = await retrievePokemon(p.url);
        // añadir el pokemon a la lista global
        originalPokemonList.push(pokemon);
    });
    // espero a que todas las promesas de la llamada al pokemon hayan sido fulfilled o rejected
    // es decir hayan terminado
    await Promise.allSettled(pokemonPromisesList);
}

async function drawPokemonListFromAPI() {
    await retrievePokemonListFromAPI();
    // ya tengo el array global completo, ya que espero la asincronía anterior cn await
    // ordeno el array
    originalPokemonList.sort((a, b) => a.id - b.id);
    // pinto todos los pokemon
    originalPokemonList.forEach(p => drawPokemon(p));
}

drawPokemonListFromAPI();

// Asignar evento keyUp al search input para poder filtrar lo que el usuario escriba
const searchInputDOM = document.querySelector('.search__input');
searchInputDOM.addEventListener('keyup', e => {
    //funcion que se ejecuta cada vez que escribo en el input
    // filtro los pokemon que tengan en su nombre el valor introducido en el input
    const filteredPokemon = originalPokemonList.filter(p => p.name.includes(e.target.value));
    undrawPokemonList();
    filteredPokemon.forEach(p => drawPokemon(p));
});