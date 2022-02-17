

class HelloGoodbyeComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            txt: 'Hola'
        }
    }

    updateText() { // esta función se invoca en el handler del evento click
        this.setState(oldState => {
            return {
                txt: oldState.txt.toLowerCase() === 'hola' ? 'Adios' : 'Hola'
            }
        });
        // Aqui no tengo todavía el nuevo estado actualizado, porque el state es asíncrono
    }

    render() {
        return (
            <React.Fragment>
                <p>{this.state.txt}</p>
                <button onClick={() => this.updateText()}>Cambiar</button>
            </React.Fragment>
        )
    }
}