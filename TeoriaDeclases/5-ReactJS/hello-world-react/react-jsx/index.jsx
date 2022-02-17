

function getName() {
  return 'Alexa';
}

const helloObj = {
  primeraProp: false,
  segundaProp: 64,
  terceraProp: 'Hola 3º'
}

class App extends React.Component{


  render(){
    return <React.Fragment>
    <DemoComponent></DemoComponent>
    <h1 id={`hola_id_${getName()}`} className={"hola" + ' adios'}>Hello, { }</h1>
    <p>Esto es un p hermano del h1</p>
    {
      helloObj.primeraProp
        ? <p>Esto es cuando es true</p>
        : <p>Esto es cuando es false</p>
    }
    {
      Array(10).fill(0).map((e, i) => <p>Este es el elemento {i}</p>)
    }
  </React.Fragment>;
  }
} 

ReactDOM.render(
  <App/>,
  document.getElementById('react-container-jsx')
);