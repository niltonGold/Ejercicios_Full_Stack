
class DivColorComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            color: 'bg-red'
        }
    }

    updateColor(){
        this.setState( oldState=> {
            return {
                color: oldState.color === 'bg-red' ? 'bg-green' : 'bg-red'
            };s
        } )
    }

    render(){
        return (
            <React.Fragment>
                <div className={`block ${this.state.color}`}></div>
                <button onClick={() => this.updateColor()}>Change color</button>
            </React.Fragment>
        )
    }

}
