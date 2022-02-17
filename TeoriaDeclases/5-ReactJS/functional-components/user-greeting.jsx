function add (a,b){
    return a+b;
}

function UserGreeting(){    
    let a = add(1,3);
    /*
        this.state = {
            greet: ''
        }

        this.state.greet
        this.setState({
            greet: 'Otra Cosa'
        })
    */
    let [greetValue, setGreet] = React.useState('0'); // Crea una nueva variable en el estado, 
    const submitHandler = e => {
        // para evitar que el submit haga su comportamiento por defecto
        // esto cuando no hay action en el form, evita el refresco de pantalla
        e.preventDefault(); 
        setGreet(e.target.elena.value);
    }
    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <input name="elena" type="text" placeholder="A quien quieres saludar"></input>
                <button type="submit">Saludar</button>
            </form>
            <Greeting name={greetValue}></Greeting>
        </React.Fragment>
    )
}