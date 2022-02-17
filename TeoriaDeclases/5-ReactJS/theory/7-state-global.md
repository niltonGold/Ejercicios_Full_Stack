# State Global

Hasta ahora hemos visto como comunicar un padre con un hijo a través de props. Estas props podías ser de cualquier tipo de datos.

¿Qué pasa si un padre como prop le pasa a su hijo una función?

## Comunicación Hijo-Padre

[Referencia](https://reactjs.org/docs/lifting-state-up.html)

Un padre le puede pasar como prop al hijo una función y este hijo puede ejecutarla con los parámetros de entrada de la función del padre.

Esta función pertenece al padre y, por tanto, puede contener cualquier código que hayamos visto, incluido una actualización de estado.

```jsx

// construirmos un hijo

function ChildComponent(props){
  const [counter, updateCounter] = useState(0); // esto es un dato interno del hijo

  const handleClick = e => {
      updateCounter(counter+1); // actualizamos el dato interno
      props.onCounterChange(counter+1); // llamamos a la funcion del padre para pasarle la información que necesita
  };

  return (
      <div>
        <p>Counter: {counter}</p>
        <button onClick={handleClick}>+</button>
      </div>
  )
}

// construimos un padre

function ParentComponent(){
    const [sqCounter, updateCounter] = useState(0);

    // una funcion que dado un valor de un contador actualiza el estado interno elevando al cuadrado dicho counter
    const changeCounter = c => updateCounter(c**2);

    return (
        <div>
            <p>Counter**2: {sqCounter}</p>
            {/* Le he llamado onCounterChange por nomenclatura simula un evento y es buena práctica que empiece por on */}
            <ChildComponent onCounterChange={changeCounter}/>
        <div>
    )
}
```

Esta técnica se utiliza mucho, el problema es que si el dato lo necesita un componente que sea abuelo o bisabuelo, tienes que estar subiendo el estado constantemente, creando funciones que simplemente llaman a la funcion del padre.

Para evitar esto, se utiliza lo que se conoce como `State Global` de una aplicación

## State Global (React Context)

[Referencia](https://reactjs.org/docs/context.html)

Un Context es la técnica que se utiliza en React para pasar información en todo el árbol DOM, evitando así tener que crear una prop de funcion en cada elemento padre para poder subir la información de un hijo

Para crear un context tengo los siguientes pasos.

1. Crear el contexto, dando un valor por defecto utilizando la función `React.createContext` que acepta el valor inicial del contexto. Lo que devuelva esta función lo debo **exportar** para ser utilizado en otros archivos

2. Indicarle al HTML (JSX) que voy a usar un contexto y que valor va a tener ese contexto para sus hijos. Esto se realiza con un componente que está en el objeto devuelto por el punto 1 llamado `Provider`. Su prop `value` será el valor que queremos del contexto para sus hijos.

3. Recuperar el valor en un hijo. Para ello existe un hook de react llamado `useContext`. Este useContext como parámetro de entrada acepta el objeto del contexto (el que exportamos en el paso 1) y devuele el value de su provider más cercano.

un ejemplo

```jsx

// en un archivo language-context.js creamos el contexto (paso 1)
// en este caso hemos creado un contexto de idioma con su valor por defecto en español de España
export const LangContext = React.createContext('es_ES');

// Creamos su provider en cualquier componente del APP (paso 2)
import {LangContext} from 'URL/language-context.js';

function SomeComponentInTree(){
    const [lang, updateLang] = useState('gl');

    const changeLanguage = e => updateLang(e.target.value);

    return(
        <div>
            <select onChange={changeLanguage}>
                <option selected>gl</option>
                <option>en_gb</option>
                <option>es_ES</option>
            </select>
            <LangContext.Provider value={lang}>
                {/* El child component si recuperase el Contexto, su valor sería gl */}
                <ChildComponent />
            </LangContext.Provider>
            <LangContext.Provider value="en_GB">
                {/* El child component si recuperase el Contexto, su valor sería en_GB */}
                <ChildComponent />
            </LangContext.Provider>
        </div>
    )
}

// paso 3: utilizando el contexto
import {LangContext} from 'URL/language-context.js';

function ChildComponent(){
    const lang = useContext(LangContext);

    return <p>El idioma actual es: {lang}</p>
}

```

### ¿Como actualizo un contexto?

Con lo que hemos en el punto anterior, podemos obtener el valor de un contexto. El componente que cree el provider, podría asignar un valor de su state y actualizarlo con alguno de los eventos que ya hemos visto en clase, pero... ¿Y si el componente que debe actualizar el contexto se encuentra en el nivel 14 del DOM? (muy lejos del provider)

Para ello vamos a crear un componente Wrapper que contenga el provider y el value del estado.

En el value del Provider pasaremos un objeto/array con un propiedad con los datos y otra con la función de actualización

```jsx

export const LangContext = React.createContext('es_ES');

// creo un componente wrapper que se encarga de inicializar el provider
function LangProvider({value, children}){
    const [lang, updateLang] = useState(value); // creo una variable de estado con el valor por defecto el value.

    return (
        <LangContext.Provider value={[lang, updateLang]}>
            {children}
        </LangContext.Provider>
    )
}

// lo usamos en el JSX, por ejemplo en el APP

function App(){

    return (
        {/*Ahora utilizamos el Wrapper LangProvider*/}
        <LangProvider value='es'>
            <ChildDOMTreeComponent />
        </LangProvider>
    )
}

// tenemos el componente hijo del provider
function ChildDOMTreeComponent(){
    const [lang] = useContext(LangContext); // solo me quedo con la primera posición

    return(
        <div>
            <p>{lang}</p>
            <ChildComponent />
        </div>
    )
}

// tenemos otro hijo que si modifica el contexto

function ChildComponent(){
    const [lang, updateLang] = useContext(LangContext);

    return (
        <div>
            <p>Idioma Actual: {lang}</p>
            <button onClick={() => updateLang('es')}>Cambia a Ingles</button>
        </div>
    )
}

```
