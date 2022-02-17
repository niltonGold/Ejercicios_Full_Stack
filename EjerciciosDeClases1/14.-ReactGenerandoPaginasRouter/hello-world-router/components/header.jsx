

class Header extends React.Component{

    render(){
        return(
            <header style={{backgroundColor:"green"}}>
                <nav>
                    <ul>
                        <li><ReactRouterDOM.Link to="/page1">Go to Page 1</ReactRouterDOM.Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
