
class DivColorComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            color: 'bg-red'
        }
    }

    updateColor(){
        this.setState( oldState=> {
            
            let finalColor = '';
            switch(oldState.color){
                case 'bg-red': finalColor='bg-yellow'; break;
                case 'bg-yellow': finalColor='bg-green'; break;
                case 'bg-green': finalColor='bg-red'; break;
                default: finalColor='bg-red'
                
            }
            return{
                color: finalColor
            };

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
