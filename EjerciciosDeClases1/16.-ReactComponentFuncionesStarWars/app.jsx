

function App(){


    return( 
    <React.Fragment>

        <Hello></Hello>
        <Greeting name="Bootcamp"></Greeting>
        <UserGreeting></UserGreeting>
        <CharacterCardList></CharacterCardList>      
        <div className="div_container">hola
            <CharacterCard nombre="luke" ojos="marron" nacimiento="12-20-20" genero="masculino"></CharacterCard>
            
        </div>
    </React.Fragment>
    )
} 

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);