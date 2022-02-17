
class HelloGoodbyeComponent extends React.Component{
  
    constructor(){
        super();
        this.state = {
            txt: 'hola'
        }
    }    

    updateText(){//Esta funcion se invoca en el handler del evento click
        this.setState( oldState => {
            return{
                txt: oldState.txt.toLowerCase() === 'hola' ? 'Adios' : 'Hola'
            }
        })    
    }

    render(){
        return(
            <React.Fragment>
                <p>{ this.state.txt }</p>
                <button onClick={ () => this.updateText()  }>Cambiar</button>
            </React.Fragment>
        )


    }
}
