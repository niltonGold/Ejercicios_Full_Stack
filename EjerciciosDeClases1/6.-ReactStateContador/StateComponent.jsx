
class StateComponent extends React.Component{

    constructor(){

        super();

        this.state = {
            
            counter : 0

        }

    }


    render(){

        return(
            <React.Fragment>
                <p>El valor actual del contador es: {this.state.counter}</p>
                <button onClick={ () =>  this.setState( oldState => ({ counter: oldState.counter+1 })  )   }>
                    +
                </button>
            </React.Fragment>
        )

    }

}

