function Header (){

    
        return(
            <header className="header">

                <p>header</p>
                <ul className="header_list">
                    <li> <ReactRouterDOM.Link to="/Registro">Registro</ReactRouterDOM.Link> </li>
                    <li> <ReactRouterDOM.Link to="/Login">Login</ReactRouterDOM.Link></li>
                    <li> <ReactRouterDOM.Link to="/Home">Home</ReactRouterDOM.Link></li>
                    <li> <ReactRouterDOM.Link to="/SingIn">SingIn</ReactRouterDOM.Link></li>
                </ul>

            </header>

        )
    

}