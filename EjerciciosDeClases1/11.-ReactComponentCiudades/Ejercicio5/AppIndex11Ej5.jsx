

class AppIndex11Ej5 extends React.Component{
    constructor(){
        super()
        this.cities = [
                    {
                        city: "Álava",
                        population: 321932,
                        utf: "%C3%81lava"
                    },

                    {
                        city: "Ávila",
                        population: 59258,
                        utf: "%C3%81vila"
                    },

                    {
                        city: "Albacete",
                        population: 172693,
                        utf: "Albacete"
                    },

                    {
                        city: "Alicante",
                        population: 335052,
                        utf:"Alicante"
                    },

                    {
                        city: "Almería",
                        population: 192697,
                        utf:"Almer%C3%ADa"
                    },

                    {
                        city: "Asturias",
                        population: 1062000,
                        utf:"Asturias"
                    }
            ]
    }  




    render(){
        return (
            <React.Fragment>
                {
                    this.cities.map( e => <Citys nombre={e.city} poblacion={e.population} utf={e.utf}></Citys>)
                }
            </React.Fragment>

        )
    }
}

ReactDOM.render(
    <AppIndex11Ej5/>,
    document.getElementById('root')
)