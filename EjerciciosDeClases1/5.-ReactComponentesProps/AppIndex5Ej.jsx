

class AppIndex4Ej extends React.Component{
    
    render(){
        return (
            <div>
                <ParentComponent></ParentComponent>
                <ChildComponent name="desde el app" hola={69} ></ChildComponent>
            </div>

        )
    }
}

ReactDOM.render(
    <AppIndex4Ej/>,
    document.getElementById('root')
)