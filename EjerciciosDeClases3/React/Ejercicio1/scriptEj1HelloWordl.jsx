// Ejercicio 1.- Hola Mundo ReactJS y JSX. Crear un componente react utilizando JSX y 
// 	      devolver un H1 que tenga como texto `hola mundo`.


class HelloWorld extends React.Component{    
    render(){
        return (
                <React.Fragment>
        
                    <h1>hola mundo</h1>
                    
                </React.Fragment>
                );
    }
}

// ReactDOM.render(
//     <HelloWorld/>,
//     document.getElementById('react-container-jsx')
// );



