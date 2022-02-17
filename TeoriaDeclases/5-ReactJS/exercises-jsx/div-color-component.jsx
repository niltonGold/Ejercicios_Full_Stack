

class DivColorComponent extends React.Component {

    constructor() {
        super();
        this.colorRotation = ['bg-green','bg-red', 'bg-yellow',  'bg-blue'],
            this.state = {
                color: this.colorRotation[0],
                currentColorPosition: 0
            }
    }

    updateColor() {
        this.setState(oldState => {
            const nextPosition = (oldState.currentColorPosition + 1) % this.colorRotation.length;
            return {
                color: this.colorRotation[nextPosition],
                currentColorPosition: nextPosition
            };
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className={`block ${this.state.color}`}></div>
                <button onClick={() => this.updateColor()}>Change Color</button>
            </React.Fragment>
        )
    }
}