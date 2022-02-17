import * as React from 'react';

import './style.css';
import PaginaComandaHeader from '../../components/pagina-comanda(componentes)/pagina-comanda-header';
import ListaPlatosElegidos from '../../components/pagina-comanda(componentes)/lista-platos-elegidos';
import ListaPlatosCategorias from '../../components/pagina-comanda(componentes)/lista-platos-categorias';






export default function PaginaComanda(){
    // const [ notaComanda, setNotaComanda ]  = React.useState([]);

    // function addListComanda(h){

    //     notaComanda.push(h);
    //     console.log(listaPedido)
    //     setNotaComanda([...notaComanda])
        
    // }  
   
    const [ listaComanda , setListaComanda ] = React.useState([]);
    // const [ hasChange , setHasChange ] = React.useState(false);


    function recibirLista(lista){
        listaComanda.push(lista);
        setListaComanda([...listaComanda]);
        console.log('recibir lista')
        console.log(listaComanda.length)
    }



    function borraItem(id){
        console.log('elemento borrado: '+id)
        console.log(listaComanda.forEach((e)=> console.log(e.nombre)));
        
        listaComanda.splice(id,1);

        console.log('comanda listacomanda');
        listaComanda.forEach((e)=> console.log(e.nombre));
        // console.log('comanda nueva');
        setListaComanda([...listaComanda])
        console.log('comanda listacomanda 2');
        listaComanda.forEach((e)=> console.log(e.nombre));
        // setHasChange(!hasChange);
    }

    // React.useEffect( ()=>{
    //     // ActualizarArray(props.listaItems);
    //     console.log('se ha actualizado 3');
    // },[hasChange] )



    return(
        <div>    
            <PaginaComandaHeader></PaginaComandaHeader>

            <div className='pagina_comanda_body'>
                    
                        <div className="lista_platos_elegidos">
                            <ListaPlatosElegidos deleteItem={borraItem} listaItems={listaComanda}></ListaPlatosElegidos>
                        </div>

                        <div className="lista_platos_categorias">      
                           <ListaPlatosCategorias listaItems={recibirLista}></ListaPlatosCategorias>
                        </div>

            </div>
   
        </div>
    )
}