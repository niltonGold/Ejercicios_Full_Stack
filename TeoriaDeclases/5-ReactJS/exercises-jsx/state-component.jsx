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