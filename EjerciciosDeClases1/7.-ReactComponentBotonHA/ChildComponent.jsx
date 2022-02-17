
class ChildComponent extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <h1> hello, { this.props.name } { this.props.hola } </h1>
    }
}
