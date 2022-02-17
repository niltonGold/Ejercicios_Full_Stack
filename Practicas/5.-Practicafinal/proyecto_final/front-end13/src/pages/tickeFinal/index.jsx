
import * as React from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style.css';
import TicketList from './lista_ticket';

export default function Ticket(){

    const [ precioTotal, setPrecioTotal ] = React.useState(sessionStorage.getItem('totalApagar'));
    const [ pagoTarjeta, setPagoTarjeta ] = React.useState(sessionStorage.getItem('tarjeta'));
    const [ pagoEfectivo, setPagoEfectivo ] = React.useState(sessionStorage.getItem('efectivo'));
    const [ devolverAlCliente, setDevolverAlCliente ] = React.useState(sessionStorage.getItem('devolverAlCliente'));
    const [ listaProductosConsumidos, setListaProducosConsumidos ] = React.useState([]);
    

    let history = useHistory();

    function Lista(){
        let list = sessionStorage.getItem('listacomanda');
        list = JSON.parse(list)
        console.log(list)
        setListaProducosConsumidos(list);
    } 



    const handleExit = () => {
        sessionStorage.removeItem('totalApagar');
        sessionStorage.removeItem('devolverAlCliente');
        sessionStorage.removeItem('tarjeta');
        sessionStorage.removeItem('efectivo');
        sessionStorage.removeItem('listacomanda');
        sessionStorage.removeItem('token');

        history.push("/");
        
    }

React.useEffect( ()=>{
        Lista();
    },[] )

    return (
        <React.Fragment>
        <button onClick={handleExit}>Exit</button>
            <Box sx={{ display: 'flex', justifyContent: 'center',  flexWrap: 'wrap', '& > :not(style)': {  m: 1, width: '50%',  height: '90%', },  }}>
                
                <Paper sx={{ textAlign: 'center', justifyContent: 'center'  }} elevation={6} > 
                <div className='container'>
                    <div>TICKET</div>

                    <hr/>
                        {listaProductosConsumidos.map( (e) => <TicketList listaProductos={e}></TicketList> )}
                    <hr/>


                    <div className='una_linea_lista'>
                        <div className='subtitulo'>Pago Total</div> <div>:</div> <div className='dinero'>{precioTotal} €</div>
                    </div>    
                    
                    <div className='una_linea_lista'> 
                        <div className='subtitulo'>Efectivo</div> <div>:</div> <div className='dinero'>{pagoEfectivo} €</div>
                    </div>
                    
                    <div className='una_linea_lista'>
                        <div className='subtitulo'>Tarjeta</div> <div>:</div> <div className='dinero'>{pagoTarjeta} €</div>
                    </div>

                    <div className='una_linea_lista'>
                        <div className='subtitulo'>Devolver</div> <div>:</div> <div className='dinero'>{devolverAlCliente} €</div>
                    </div>
                   
                </div>    
                </Paper>
            </Box>
        </React.Fragment>
    )
}