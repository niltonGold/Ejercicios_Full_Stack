
class CityMadrid extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <div className="div_ciudad_informacion">
                    <h1>Nombre de ciudad: { this.props.nombre } </h1>
                    <p>Poblacion: { this.props.poblacion }</p>
                </div>
            </React.Fragment>
        )
    }

}