

class AppIndex11Ej1 extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <CityMadrid nombre="Madrid" poblacion="3,207,247"></CityMadrid>
                <CityBarcelona nombre="Barcelona" poblacion="1,611,822"></CityBarcelona>
                <CitySevilla nombre="Sevilla" poblacion="700,169"></CitySevilla>
            </React.Fragment>

        )
    }
}

ReactDOM.render(
    <AppIndex11Ej1/>,
    document.getElementById('root')
)