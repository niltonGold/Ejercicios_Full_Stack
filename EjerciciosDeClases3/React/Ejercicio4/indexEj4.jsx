
let imagenes = [];

for( let i=0 ; i<7 ; i++){
    imagenes.push(<Card></Card>)
}  

class App extends React.Component{
    render(){
        return(
            <div>
                          
            {
                    
             imagenes
          
            }
            </div>
              )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('div_Container')
) 