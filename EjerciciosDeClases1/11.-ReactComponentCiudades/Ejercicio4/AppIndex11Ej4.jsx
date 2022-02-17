

class AppIndex11Ej4 extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Citys nombre="Madrid" poblacion="3,207,247"></Citys>
                <Citys nombre="Barcelona" poblacion="1,611,822"></Citys>
                <Citys nombre="Sevilla" poblacion="700,169"></Citys>
            </React.Fragment>

        )
    }
}

ReactDOM.render(
    <AppIndex11Ej4/>,
    document.getElementById('root')
)