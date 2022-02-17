

function App() {

        return (
        <ReactRouterDOM.BrowserRouter>
            {/*Esto son los enlaces (como si fuesen a de html) a rutas internas de React */}
            <Header></Header>
            <Hello></Hello>
            {/* Es la definición de las páginas que yo tengo en mi app. Suele ir en el App.jsx */}
            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route path="/page1">
                    <AirportList></AirportList>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route path="/page2">
                    <CityList></CityList>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route path="/">
                    <p>Esto sería como una home</p>
                </ReactRouterDOM.Route>
            </ReactRouterDOM.Switch>
            <Footer></Footer>
        </ReactRouterDOM.BrowserRouter>
        )
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);