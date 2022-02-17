

class App extends React.Component {


    render() {
        return (
        <ReactRouterDOM.BrowserRouter>
            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route exact path='/:id'>
                    <PeopleDetail></PeopleDetail>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route path='/'>
                    <PeopleList></PeopleList>
                </ReactRouterDOM.Route>
            </ReactRouterDOM.Switch>
        </ReactRouterDOM.BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);