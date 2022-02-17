class ChildComponent extends React.Component{

    constructor(props){ // las props me vienen como parámetro de entrada del constructor y es un objeto
        super(props); // le paso las props al padre de la clase (de la herencia, es decir, React.Component) en el super
    }

    render(){
        // accedo a través del this a la prop `name` pasada por el componente que consuma este ChildComponent
        return <h1>Hello, {this.props.name} {this.props.hola}</h1>
    }

}