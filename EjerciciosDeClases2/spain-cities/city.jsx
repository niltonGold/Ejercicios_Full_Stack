


class City extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='city__container'>
                <h1>{this.props.name}</h1>
                <p>{this.props.population}</p>
            </div>
        )
    }
}