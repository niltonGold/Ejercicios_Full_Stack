

function App(){


    return <React.Fragment>
    <Hello></Hello>
    <Greeting name="Bootcamp"></Greeting>
    <UserGreeting></UserGreeting>
  </React.Fragment>;
} 

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);