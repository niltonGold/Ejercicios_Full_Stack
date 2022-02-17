

class AppIndex6Ej extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <HelloGoodbyeComponent></HelloGoodbyeComponent>
                <DivColorComponent></DivColorComponent>
            </React.Fragment>

        )
    }
}

ReactDOM.render(
    <AppIndex6Ej/>,
    document.getElementById('root')
)