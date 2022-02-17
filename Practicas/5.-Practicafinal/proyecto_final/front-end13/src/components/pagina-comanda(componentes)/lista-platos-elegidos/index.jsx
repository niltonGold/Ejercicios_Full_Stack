import * as React from 'react';
import List from '@mui/material/List';
import './style.css';    
import MostrarLosPedido from '../mostrarUnPedido';
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function ListaPlatosElegidos(props){

    const [t, i18n] = useTranslation('common');

    const [ listaComanda, setListaComanda ] = React.useState([]);
    const [ hasChange , setHasChange ] = React.useState(false);

    const [ precioTotal, setPrecioTotal ] = React.useState(0);

    // function ActualizarArray(param){
    //     setListaComanda(param);
    //     console.log(listaComanda);
    // }

    function BorrarLista(id, precio){
        console.log('borrarlista1 '+precio);
        console.log('borraslista2 '+precioTotal);
        let precioReducido = precioTotal - precio;
        setPrecioTotal(precioReducido);
        console.log('nuevo precio: '+precioTotal)
        // let index = 0;
        // index = listaComanda.findIndex( (e) => e.id === id )
        // console.log(listaComanda);
        // console.log(index);
        // listaComanda.splice(index,1);
        setHasChange(!hasChange);
        props.deleteItem(id);
    }
 



   const handleCobrar = () => {
    console.log('platos elegidos');
    let list = JSON.stringify(props.listaItems);
    console.log(list);
       
    sessionStorage.setItem('listacomanda', list);
   }


    function SumarPrecio(precio){
        let num = precioTotal+ precio;
        setPrecioTotal(num);
    }
 
    React.useEffect( ()=>{
        // ActualizarArray(props.listaItems);
        console.log('se ha actualizado');
    },[hasChange] )
    // console.log('DATA: ',listaComanda)
    // console.log('DATA_TIPE: ', typeof listaComanda)
    return(
        
        <div className='list_container_total_cobrar'>

                <List sx={{ marginTop: 3,width: '90%', maxWidth: 380, bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 200, '& ul': { padding: 0 },}} subheader={<li />} >
    
                       <div className='titulos'>
                           <div>{t('productos.productos')}</div>
                           <div>{t('importe.importe')}</div>
                       </div>

                       <div>
                           
                            {props.listaItems.map((e,i) => <MostrarLosPedido sumarPrecio={SumarPrecio} key={i} id={i} borrarItem={BorrarLista} pedido={e}></MostrarLosPedido>)}

                       </div>
 

                </List>
            

                <div>

                    ToTal : {precioTotal} €                            
                </div>

                <Link to={`/pagina_cobro/${precioTotal}`}>
                        <button onClick={handleCobrar}>
                            {t('cobrar.cobrar')} €
                        </button>
                </Link>
    </div>
    )
}