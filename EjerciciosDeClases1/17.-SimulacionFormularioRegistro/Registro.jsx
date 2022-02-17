
function Registro(){

    function handleSubmit(e){
        e.preventDefault();
        let arrayDatos = [];
        let objetDatos = {
            name:e.target.nombre.value,
            nick:e.target.nick.value,
            pass:e.target.pass.value
        }



        arrayDatos.push(objetDatos);

        localStorage.setItem('userData', JSON.stringify(arrayDatos) )

    }

    return(
        <div>
            <p>Estas en el Registro</p>
            <form className="form" onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="nombre">Introduce nombre</label>
                    <input type="text" name="nombre" required></input>
                </div>

                <div>
                    <label htmlFor="nick">Introduce nick</label>
                    <input type="text" name="nick" required></input>
                </div>

                <div>
                    <label htmlFor="pass">Introduce pass</label>
                    <input type="text" name="pass" required></input>
                </div>

                <button type="submit">Submit</button>
                
            </form>
        </div>
    )        

}