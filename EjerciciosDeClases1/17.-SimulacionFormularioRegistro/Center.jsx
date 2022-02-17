
function Center(){

        return(
            <main className="center">

                <ReactRouterDOM.Switch>


                    <ReactRouterDOM.Route path="/Registro">
                        <Registro></Registro>
                    </ReactRouterDOM.Route>


                    <ReactRouterDOM.Route path="/Login">
                        <Login></Login>
                    </ReactRouterDOM.Route>


                    <ReactRouterDOM.Route path="/Home">
                        <Home></Home>
                    </ReactRouterDOM.Route>


                    <ReactRouterDOM.Route path="/SingIn">
                        <SingIn></SingIn>
                    </ReactRouterDOM.Route>


                </ReactRouterDOM.Switch>   

            </main>
        )

}