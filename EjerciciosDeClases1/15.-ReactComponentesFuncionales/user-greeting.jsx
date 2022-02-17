
function add (a,b){
    return a+b;
}

function UserGreeting(){   

    let a = add(1,3);

    console.log(a);

    let [greetValue, setGreet] = React.useState('0');

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
            <p>{ a }</p>
            <Greeting name={greetValue}></Greeting>
        </React.Fragment>
    )
    
}