# Router Avanzado

## Path params

Es un variable en el `path` de la URL. Se define a la hora de escribir una ruta, en el atributo `path` del componente `Route`, utilizando el carater `:` seguido del nombre del parámetro.

Ejemplo:

```jsx
    // Esto define un path param llamado name
    <Route path="/pokemons/:name" />
    // Esto define dos path params llamados name y id
    <Route path="/pokemons/:name/movimientos/:id" />
```

Esto define infinitias rutas y almacena el valor del path param que se haya puesto en el lugar del path que le corresponde, dentro del router.

Esta técnica se utiliza en el 100% de los caso cuando tenemos una página de listado de elementos y luego una página de detalle por cada uno de los elementos.

Esto sería la definición de la ruta, que tendremos asociado a un componente de React, que es quien gestionaría la página de esa ruta.

¿Como obtengo su valor en la página de detalle?

El valor es almacenado en el Router de react. El propio ruter te expone un `hook` llamado `useParams`.

Este hook no recibe nada como parámetro de entrada, pero devuelve un objeto cuyas propiedades son los nombres de los path params definidos y cuyos valores son el valor de ese path param.

Partiendo del ejemplo anterior:

```jsx
function ComponentDetalleRuta_1() {
  /**
   * Advance tip: como conocemos los nombres de las propiedas del objeto, podríamos utilizar la deconstrucción del objeto
   * Es decir: const {name} = useParams();
   * la variable name, contiene el valor del path param
   */
  const params = useParams();
  console.log(params.name); // en name se encuentra el valor del path param definido.
}

function ComponenteDetalleRuta_2() {
  const { name, id } = useParams();
  console.log(name); // pinta el valor del path param con nombre name
  console.log(id); // pinta el valor del path param con nombre id
}
```

Por ultimo, en el componente listado, necesitamos meter un `Link` con la URL de cada uno de los elementos.

```jsx
// Esto sería lo que tendría que devolver el map del array de elementos
<Link to={`/pokemon/${item.name}`}>
  <ItemComponent item={item} />
</Link>
```

## Query Params

Esto es otro tipo de parámetros de la url. Nos ayuda a recoger valores del queryString de la URL.

El query string es lo que iría despues del path, iniciandose con el caracter `?`. Los parámetros en el queryString se escriben en la URL mediante `nombre=valor` y cada parámetro se separa por el caracter `&`.

Ejemplo de URL con query string:

`https://www.google.es/search?q=neoland&clase=demo`

En este caso tengo un query param con el nombre `q` y su valor es `neoland` y otro query param con su nombre `clase` y valor `demo`.

Los query params NO se definen en ninguna ruta, simplemente es un acuerdo entre el que navega (Link) y la página destino.

El uso que se le suele dar a los Query Params es el de filtrado o configuración de una página. En el ejemplo de pòkemons podría ser el parámetro `limit` o el parámetro `offset`.

Tenemos en este caso dos actores:

1. El que navega a la página destino.

   Este componente debe construir el string de la URL con los query params necesarios en el atributo `to` del componente `Link`.

   Ejemplo con los pokemon en la página listado:

   ```jsx
   // esto sería un link en alguna página de mi aplicación que me va a navegar al listado de los pokemons, con un offset y un limit preestablecido
   <Link to={`/pokemons?limit=${myLimit}&offset=${myOffset}`} />
   ```

2. La página que recibe los query params, necesita obtener su valor.

Para ello utilizará el hook que proporciona el router llamado `useLocation`. Este hook no tiene parámetros de entrada y devuelve el objeto `Location` del BOM para esa URL.

Con use location y la clase URLSearchParams, podemos generar un objeto con los parámetros de query.

```jsx
function MyComponent() {
  const location = useLocation();
  // location tiene un atributo search con el query string de la URL actual
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams.get("limit")); // nos devolveria el valor del parámetro limit o null si no existiese
  // para inicializar podemos hacer un if, un ternario o un operador nullish
  const limit = searchParams.get("limit") ?? 150;
  /*
        El operador tambien se puede utilizar de esta manera se utiliza mucho para inicializar valores que vienen del servidor
        let offset = searchParams.get('offset');
        offset ??= 0;
    */
}
```

En el ejemplo del react-router de [query params](https://v5.reactrouter.com/web/example/query-parameters) podemos ver como se construye su propio hook llamado `useQuery`

## Custom Hooks

En react podemos construirnos nuestro hook. Los unicos requisitos son:

1. El nombre del hook debe empezar por `use`.
2. Un hook solo se puede invocar (llamar) dentro de un componente de función u otro hook.

En el ejemplo anterior del router podríamos hacer un custom hook que nos devuelva ya el objeto URLSearchParams para poder usarlo.

```jsx
/*
Creamos un custom hook que devolverá el URLSearchParams
*/
// en otro archivo .js (EJ: use-query-hook.js)
export function useQuery() {
  const location = useLocation();
  return new URLSerchParams(location.search);
}

// En el archivo my-component.jsx
import { useQuery } from "URL/use-query-hook.js";

function MyComponent() {
  const queryParams = useQuery();
  console.log(queryParams.get("limit"));
}
```

Vamos a ver un ejemplo más complejo. Queremos un componente que recupere la información del pokemon recibido por el path param id

1. Versión sin custom hooks

   ```jsx
    // archivo de mi componente

    function PokemonDetail() {
        // recuperamos el path param
        const { id } = useParams();
        // creamos una variable de estado interno para el pokemon
        const [pokemon, updatePokemon] = useState({});
        // llamamos al API del  de manera asíncrona
        useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((r) => r.json())
            .then((p) => updatePokemon(p));
        }, []);

        return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} />
            {/* Y todo el HTML y CSS extra del pokemon*/}
        </div>
        );
    }
   ```

2. Version con custom hooks

```jsx
// archivo pokemon.hooks.js
// la idea es crear un custom hook que me devuelva la info del pokemon
export function usePokemonDetailFromParams() {
  const { id } = useParams();
  const [pokemon, updatePokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((r) => r.json())
      .then((p) => updatePokemon(p));
  }, []);

  return pokemon; // en este caso devuelvo la variable de estado del pokemon
}

// archivo de mi componente
import {usePokemonDetailFromParams} from 'URL/pokemon.custom.js';

function PokemonDetail(){
    // recuperar el pokemon con el hook
    const pokemon = usePokemonDetailFromParams();

    return (
       <div>
         <h1>{pokemon.name}</h1>
         <img src={pokemon.sprites?.front_default} />
         {/* Y todo el HTML y CSS extra del pokemon*/}
       </div>
     );
}
```

## Rutas Privadas

Es una página dentro de nuestra aplicación que necesita de un usuario autenticado par apoder renderizarse.

Para poder construir una ruta privada tenemos que hacer los siguiente:

1. Construir un custom hook que devuelva un boolean si hay usuario logado o no.
2. Construir un componente de react que se llama PrivateRoute, que lo que hace es definir una ruta del react-router-dom.
3. Esa tendrá que pintar la página si el hay usuario logado y hacer una redirección a la página del login si el usuario NO está logado.
4. Utilizar el componente dentro de un Switch

Ejemplo:

```jsx

// paso 1. archivo auth.hooks.js
export function useAuth(){
    // en este caso concreto tenemos la condicion de si el usuario está en el localstorage o no y la usamos para devolver el booleano
    return localstorage.getItem('use') !== null;
}


// paso 2 y 3. archivo private-route.jsx
import {useAuth} from 'URL/auth.hooks.js';

 // hacemos una deconstrucción de parámetros para las props del componente. Nos quedamos con la propiedad children y el resto de props las dejamos en la variable rest. A esto se le conoce como Rest Parameters
function PrivateRoute({ children, ...rest }) {
  const auth = useAuth(); // llamamos a nuestro hook que nos dice si estamos logados o no;
  return ( // devolemos el componente Route del react-router-dom
    <Route
      {...rest} // le pasamos todos las props que habian pasado a nuestro componente
      render={({ location }) => // la prop render, nos permite hacer renderizado condicional. Acepta una función que tiene las propiedades de la ruta como parámetro de entrada. En este caso cogemos el location (deconstrución)
        auth ? ( // si estamos logados pintamos el DOM que tengamos como hijo en el componente <PrivateRoute> dentro del Switch
          children
        ) : ( // si no estamos logados, redirigimos a la página del login, pasándole la localización de la que veníamos. Esto puede ser util para redirigir al usuario a la página a la que iba despues de hacer login.
          <Redirect // este componente se importa de react-router-dom
            to={{
              pathname: "/login", // a la ruta en la que queremos redirigir
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


// paso 4: Por ejemplo. app.js

function App(){

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/otra-ruta-publica">
                    <OtherPublicPage />
                </Route>
                <PrivateRoute exact path="/mi-perfil" >
                    <ProfilePage />
                </PrivateRoute>
                <PrivateRoute exact path="/other-private" >
                    <OtherPrivatePage />
                </PrivateRoute>
                <Route path="**">
                    <NotFoundPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

```
