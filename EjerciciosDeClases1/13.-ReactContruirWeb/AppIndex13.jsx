

class AppIndex13 extends React.Component{
    

    render(){
        return (
            <ReactRouterDOM.BrowserRouter>
                <Header></Header>
                
                
                <Center></Center>             
                

                <Footer></Footer>
            </ReactRouterDOM.BrowserRouter>

        )
    }
}

ReactDOM.render(
    <AppIndex13/>,
    document.getElementById('root')
)