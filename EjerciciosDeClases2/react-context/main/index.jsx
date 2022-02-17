import { LangContext } from "../../language/language-context";
import { useContext } from "react";


function Main(){
    const [lang] = useContext(LangContext);
    const greet = lang==='es' ? 'Hola' : 'Hello';

    return(
        <h1>{greet}</h1>
    )
}

export default Main