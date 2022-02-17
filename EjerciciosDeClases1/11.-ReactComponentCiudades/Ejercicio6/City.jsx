
class City extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="div_ciudad_informacion">
                    <h1>Nombre de Ciudad:{this.props.nombre}</h1>
                    <p>Poblacion: {this.props.poblacion}</p>
                    <p>Poblacion: {this.props.utf}</p>
                    
                </div>
            </React.Fragment>
        )
    }

}