# Componentes

Una porción de HTML, CSS y JS que tiene sentido funcional por sí mismo, se pueden reutilizar simplemente llamando a su etiqueta del DOM.

Esto nos ayuda a varias cosas:

- Desarrollar una vez y utilizar el componente en múltiples lugares de mi web.
- Evolucionar el componente de manera más rápida
- Detectar y corregir los errores con mucha más eficiencia.

## Comunicando el padre con el hijo (props)

Los componentes se pueden ver como funciones que devuelven un HTML, CSS y JS.

Para poder hacer más dinámico el componente y poderlo reutilizar, existe un concepto que se llama `props` que es un objeto con los parámetros de entrada el componente, que el padre tiene que darle valor.

El concepto es muy similar al del parámetro de entrada de una función JS, es decir, quien llama al componente (padre) puede pasarle esos parámetros.

Las props entran al componente en el constructor del mismo.

El padre da valor a las props como si fuesen atributos del HTML cuando llama al componente hijo.

Las props son un `contrato` en el Componente Hijo y el Componente Padre

veamos un ejemplo:

```jsx

class ChildComponent extends React.Component{

    constructor(props){ // las props me vienen como parámetro de entrada del constructor y es un objeto
        super(props); // le paso las props al padre de la clase (de la herencia, es decir, React.Component) en el super
    }

    render(){
        // accedo a través del this a la prop `name` pasada por el componente que consuma este ChildComponent
        return <h1>Hello, {this.props.name} {this.props.hola}</h1>
    }

}


class ParentComponent extends React.Component{

    render(){
        return <ChildComponent name="Alex" hola={2} />;
    }
}

```

## Reaccionando a los cambios internos (State)

Todos los componentes tiene un estado interno. Este esta es un objeto (state) cuyas propiedades tienen como un `listener` que cuando cambien hace que el componente se repinte, es decir, se vuelva a llamar al render con los nuevos valores del state.

Quien desarrolla el componente es quien decide que atributos necesita que cambien, definiéndolos dentro del objeto `state`, asociado al this

Para cambiar el valor de una propiedad del objeto state se utiliza la función `setState`, donde le pondremos el nuevo valor del state.

```jsx

class MyComponent extends React.Component {

    constructor(){
        super();
        // el objeto state se tiene que inicializar en el constructor
        this.state = {
            prop_state_que_cambia: '', // defino las propiedades que yo quiera o a las que necesite reaccionar, dándole un valor inicial
            counter: 0
        }
    }


    render(){
        // cada vez que cambie el state este método se vuelve a llamar
        return (
            <React.Fragment>
                <p>El valor actual del contador es: {this.state.counter}</p>
                {/* El setState modifica el valor de las propiedades del estado, dándole en este caso un valor fijo */}
                <button onClick={() => this.setState({ counter: 45})}>+</button>
            </React.Fragment>
        )
    }
}

/** Cuando el valor del nuevo estado depende del anterior, habrá que llamar a la funcion setState, pero en vez de pasándole el objeto con el nuevo valor del state, le pasaremos una función como parámetro de entrada

Esta función recibe el valo del state anterior y solicita que le devuelvas el nuevo valor 
 */
 this.setState(oldState => ({ counter: oldState.counter+1}));
```

## LifeCycle

Todos los componentes de React, tienen una vida o un ciclo de vida.

Este ciclo de vida empieza en el momento en el que queremos pintar el componente en el DOM, llamando al constructor del mismo.

El componente se queda vivo mientras esté visualizandose en el DOM. Cuando eliminemos el componente del DOM, este deja de existir para siempre (DEP).

Para poder gestionar este ciclo de vida, React ofrece unas funciones a las que va a llamar y que como desarrolladores podemos definir.

Estas funciones se llamarán dependiendo de la fase en la que esté el componente.

Todos los componentes tienen una fase inicial que se llama `mounting`, que solo se ejecuta una vez y es a la hora de crear ese componente y añadirlo al DOM por primera vez.

Una vez añadido al DOM, tenmos la fase de actualización. Es una fase que se produce cada vez que se cambie una prop o un atributo del state y lo que hace es repintar el componente de react.

Esta fase se repite hasta que el componente se elimine o destruya, que entonces pasaríamos a la última fase que es la de `Unmounting`

![Diagrama del ciclo de vida](https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)

```jsx

class StateComponent extends React.Component {

    constructor(){
        super();
        // el objeto state se tiene que inicializar en el constructor
        this.state = {
            prop_state_que_cambia: '', // defino las propiedades que yo quiera o a las que necesite reaccionar, dándole un valor inicial
            counter: 0
        }
        alert('Constructor');
    }

    componentDidMount(){
        alert('componentDidMount');
    }

    shouldComponentUpdate(){
        alert('shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(){
        alert('componentDidUpdate');
    }

    componentWillUnmount(){
        alert('componentWillUnmount');
    }

    render(){
        alert('Render');
        // cada vez que cambie el state este método se vuelve a llamar
        return (
            <React.Fragment>
                <p>El valor actual del contador es: {this.state.counter}</p>
                <button onClick={() => this.setState(oldState => ({ counter: oldState.counter+1}))}>+</button>
            </React.Fragment>
        )
    }
}

```

## Escuchando Eventos

Para poder escuchar eventos, tenemos que definir el atributo del elemento DOM que indique el evento que nos interesa. Todos los nombres de atributos de eventos empiezan por `on` seguido del nombre del evento en Camel Case.

Por ejemplo para escuchar un click debemos darle valor al atributo `onClick`

¿Que valor le tengo que poner al atributo del evento?

Pues el valor es de tipo función, en concreto, la función que se va a ejecturar cuando se produzca el evento. Es exactamente igual que el segundo parámetro addEventListener.

A esta función le entrara como parámetro de entrada el evento.

```jsx

handleClick(e){
    // Gestionaríamos el evento
}

render(){
    return <button onClick={e => this.handleClick(e)}>Hacer cosas</button>
}

```

```jsx

handleSubmit(e){
    // Gestionaríamos el evento
    e.preventDefault();
    e.target; // tendría el formulario
}

render(){
    return <form onSubmit={e => this.handleSubmit(e)}>
              <input type="text" />
              <button type="Submit">Submit</button>
           </form>
}

```

## Gestionando la asincronía

Para gestionar la asincronía en un componente, debemos tener claro dos cosas:

- Que es la asincronía
- Como es el ciclo de vida de un componente de React, con sus 3 fases.

La asincronía de los eventos, la gestionamos como en el apartado anterior.

Ahora veremos los timers y las llamadas a servidor.

Supongamos que quiero un componente que requiere unos datos del servidor. Para poder obtener los datos necesito llamar al fetch, pero ¿Y si el fetch no ha terminado antes del primer render?

Como el fetch es asíncrono, cuando la instrucción termina, el componente ya ha finalizado su fase de montado y estaríamos en la fase de actualización.

Para forzar un ciclo de actualización, deberíamos guardar el resultado del fetch en el state.

```jsx

class AirportList extends React.Component {

    constructor(){
        super();
        this.state = {
            airports: []
        }
    }

    async componentDidMount(){
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
        const airports = await r.json();
        const newState = {
            airports
        }
        this.setState(newState);
        // ya tengo la lista de aeropuertos
    }

    render(){
        return(
            <div>
                {/* Pinta tantos Componentes Airport como aeropuertos me devuelva el servidor*/}
               { this.state.airports.map(a => <Airport key={a.code} airport={a}></Airport>) }
            </div>
        )
    }
}


class Airport extends React.Component {

    constructor(props){
        super(props);
        // quien me llame me tiene que pasar un objeto airport 
        // con la estructura adecuada
    }

    render(){
        return (
            <div className='airport__container'>
                <p>Name: {this.props.airport.name}</p>
                <p>Country: {this.props.airport.country}</p>
                <p>State: {this.props.airport.state}</p>
                <p>City: {this.props.airport.city}</p>
                <p>Lat: {this.props.airport.lat}, Long: {this.props.airport.lon}</p>
            </div>
        )
    }
}



```
