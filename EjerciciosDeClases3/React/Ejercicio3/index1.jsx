class App extends React.Component{

    render(){

        return (
                <React.Fragment>
                    <Card></Card>
                </React.Fragment> 

               )
    }

}


ReactDOM.render(
    <App/>,
    document.getElementById('container_card')
)