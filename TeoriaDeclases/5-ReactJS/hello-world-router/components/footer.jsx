

class Footer extends React.Component {

    render(){
        return (
            <footer style={{backgroundColor: 'red'}}>
                <nav>
                    <ul>
                        <li><ReactRouterDOM.Link to="/page2">Go to Page 2</ReactRouterDOM.Link></li>
                    </ul>
                </nav>
            </footer>
        )
    }
}