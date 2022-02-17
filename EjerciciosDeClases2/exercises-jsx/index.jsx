

class App extends React.Component{

    render(){
        return (
            <div>
                <HelloWorld></HelloWorld>
                <FirstDiv></FirstDiv>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

