

class Index4Ej1 extends React.Component{
    
    render(){
        return (
            <React.Fragment>

                <AeropuertosComponent 
                    name="Anna Airport"
                    contry="French Polynesia"
                    state="Tuamotu-Gambier"
                    city="Annaa"
                    lat={-17.3595}
                    lon={-145.494}
                
                ></AeropuertosComponent>


            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Index4Ej1/>,
    document.getElementById('root')
)