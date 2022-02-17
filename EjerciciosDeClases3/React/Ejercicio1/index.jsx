
class App extends React.Component{

    render(){
        return (
            <React.Fragment>
                
                    <HelloWorld></HelloWorld>
                    <FirstDiv></FirstDiv>
                
            </React.Fragment>
            )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react-container-jsx')
);