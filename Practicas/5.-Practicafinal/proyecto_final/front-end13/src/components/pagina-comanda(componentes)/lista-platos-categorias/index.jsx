import * as React from 'react';



import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {useTranslation} from "react-i18next";

import './style.css';



const platos = JSON.parse(sessionStorage.getItem('platos')); 

export default function ListaPlatosCategorias(props){

    const [t, i18n] = useTranslation('common');

    const categorias = [
        <Button onClick={ () => {
                            if(categoriaBebidas){
                               setCategoriaBebidas(!categoriaBebidas)
                            }
                            if(!categoriaEntrantes){
                                setCategoriaEntrantes(!categoriaEntrantes)    
                            }
                            if(!categoriaSegundos){
                                setCategoriaSegundos(!categoriaSegundos)
                            }
                            if(!categoriaPostres){
                                setCategoriaProstres(!categoriaPostres)
                            }        
        } } >
            <div> {t('lista_platos_categorias.bebidas')} </div>
        </Button>,


        <Button onClick={ () => {
                            if(!categoriaBebidas){
                                setCategoriaBebidas(!categoriaBebidas)
                            }
                            if(categoriaEntrantes){
                                setCategoriaEntrantes(!categoriaEntrantes)    
                            }
                            if(!categoriaSegundos){
                                setCategoriaSegundos(!categoriaSegundos)
                            }
                            if(!categoriaPostres){
                                setCategoriaProstres(!categoriaPostres)
                            }
            
         }} key="two">
            <div>{t('lista_platos_categorias.entrantes')}</div>
        </Button>,


        <Button  onClick={ () => {
                            if(!categoriaBebidas){
                                setCategoriaBebidas(!categoriaBebidas)
                            }
                            if(!categoriaEntrantes){
                                setCategoriaEntrantes(!categoriaEntrantes)    
                            }
                            if(categoriaSegundos){
                                setCategoriaSegundos(!categoriaSegundos)
                            }
                            if(!categoriaPostres){
                                setCategoriaProstres(!categoriaPostres)
                            }

        }} key="three">
            <div>{t('lista_platos_categorias.segundos')} </div>
        </Button>,


        <Button onClick={ () => {
                            if(!categoriaBebidas){
                                setCategoriaBebidas(!categoriaBebidas)
                            }
                            if(!categoriaEntrantes){
                                setCategoriaEntrantes(!categoriaEntrantes)    
                            }
                            if(!categoriaSegundos){
                                setCategoriaSegundos(!categoriaSegundos)
                            }
                            if(categoriaPostres){
                                setCategoriaProstres(!categoriaPostres)
                            }

        }} key="fourt">
            <div>{t('lista_platos_categorias.postres')} </div>
        </Button>,


      ];



    const [ categoriaBebidas, setCategoriaBebidas ]  = React.useState(true);
    const [ categoriaEntrantes, setCategoriaEntrantes ]  = React.useState(true);
    const [ categoriaSegundos, setCategoriaSegundos ]  = React.useState(true);
    const [ categoriaPostres, setCategoriaProstres ]  = React.useState(true);


    const [ bebidas, setBebidas ]  = React.useState([]);
    
    const [ entrantes, setEntrantes ] = React.useState([]);

    const [ segundos, setSegundos ]  = React.useState([]);
    
    const [ postres, setPostres ] = React.useState([]);
  

    function addListComanda(producto){
        // notaComanda.push(h);
        // setNotaComanda([...notaComanda])
        // props.listaItems(notaComanda);

        props.listaItems(producto);

        console.log(producto);
    }  


    //     const addListComanda = (e) => {
    //     // console.log(typeof e.target.id);
    //     let idFromButton = e.target.id;
    //     // console.log(listaPlatos[0].id);
    //     let producto = listaPlatos.filter( e => e.id === idFromButton);
    //     console.log(producto[0].nombre);
    //     notaComanda.push(producto[0] );
    //     setNotaComanda([...notaComanda])
    //     props.listaItems(notaComanda);
        
    // }
   
    const bebida = 
        { 'bebidas' :[
            {    
            'nombre': 'cocacola',
            'id': 1,
            'precio':3
            },
            {
                'nombre': 'fantaNan',
                'id': 2,
                'precio':4
            }
        ]
        }





    const Bebidas = () => {
            const optionsBebidas = {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json'
                }
            }

            fetch('http://localhost:3001/bebidas', optionsBebidas)
            .then(r => r.json() )
            .then(d => {
                let b = JSON.stringify(d);
                b = JSON.parse(b);
                setBebidas(b);
            });
    }




    const Entrantes = () => {
            const optionsEntrantes = {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json'
                }
            }

            fetch('http://localhost:3001/entrantes', optionsEntrantes)
            .then(r => r.json() )
            .then(d => {
                let e = JSON.stringify(d);
                e = JSON.parse(e);
                setEntrantes(e);
            });
    }




    const Segundos = () => {
            const optionsSegundos = {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json'
                }
            }

            fetch('http://localhost:3001/segundos', optionsSegundos)
            .then(r => r.json() )
            .then(d => {
                let s = JSON.stringify(d);
                s = JSON.parse(s);
                setSegundos(s);
            });
    }




    const Postres = () => {
            const optionsPotres = {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json'
                }
            }

            fetch('http://localhost:3001/postres', optionsPotres)
            .then(r => r.json() )
            .then(d => {
                let p = JSON.stringify(d)
                p = JSON.parse(p);
                setPostres(p)
            });
    }


    React.useEffect( ()=>{
        Bebidas();
        Entrantes();
        Segundos();
        Postres();
        console.log('se ha actualizado en lista platos categorias');
    },[] )





   
    return(
        
        <div className='categoria_elegida'>

                
                <Box className='productos_a_elegir' sx={{ '& button': { m: 1 }, width: '60%', height: '100%' }}>
                    {/* <div>{bebidas.map((e)=>e.nombre)}</div>
                    <div>{entrantes.map((e)=>e.nombre)}</div>
                    <div>{segundos.map((e)=>e.nombre)}</div>
                    <div>{postres.map((e)=>e.nombre)}</div> */}
                    
                    <div className={categoriaBebidas ? 'categoria--hidden' : 'categoria_elegida'}>
                            <div >
                                <Button  sx={{ borderRadius: 8, fontSize: 10 }} id='cc'  onClick={ () => addListComanda( bebidas[0] ) } variant="contained" size="medium">
                                   {t('lista_platos_categorias.cocacola')}

                                </Button>

                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id=''cl onClick={ () => addListComanda( bebidas[1] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.cocalight').toLocaleLowerCase()} 
                                </Button>
                            </div>

                            <div>
                                <Button sx={{ borderRadius: 8, fontSize: 10}} id='fn' onClick={ () => addListComanda( bebidas[2] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.fantanaranja')} 
                                </Button>

                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='nt' onClick={ () => addListComanda( bebidas[3] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.nesti')} 
                                </Button>

                            </div>
                    </div>

                    <div className={categoriaEntrantes ? 'categoria--hidden' : 'categoria_elegida'}>
                            <div >
                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='pl' onClick={ () => addListComanda( entrantes[0] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.palitos')} 
                                </Button>

                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='ng' onClick={ () => addListComanda( entrantes[1] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.pollo')} 
                                </Button>

                            </div>

                            <div>
                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='br' onClick={ () => addListComanda( entrantes[2] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.berengena')} 
                                </Button>
                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='cb' onClick={ () => addListComanda( entrantes[3] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.cebolla')} 
                                </Button>

                            </div>
                    </div>


                    <div className={categoriaSegundos ? 'categoria--hidden' : 'categoria_elegida'}>
                            <div >
                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='hb' onClick={ () => addListComanda( segundos[0] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.hamburguesa')}
                                </Button>

                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='ct' onClick={ () => addListComanda( segundos[1] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.costillas')}
                                </Button>

                            </div>

                            <div>
                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='es' onClick={ () => addListComanda( segundos[2] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.ensalada')}
                                </Button>
                                <Button sx={{ borderRadius: 8, fontSize: 10}} id='sd' onClick={ () => addListComanda( segundos[3] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.sandwish')}
                                </Button>

                            </div>
                    </div>


                    <div className={categoriaPostres ? 'categoria--hidden' : 'categoria_elegida'}>
                            <div >
                                <Button sx={{ borderRadius: 8, fontSize: 10}} id='ck' onClick={ () => addListComanda( postres[0] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.galleta')}
                                </Button>

                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='hl' onClick={ () => addListComanda( postres[1] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.helado')}
                                </Button>

                            </div>

                            <div>
                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='tr' onClick={ () => addListComanda( postres[2] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.tarta')}
                                </Button>
                                <Button sx={{ borderRadius: 8, fontSize: 10 }} id='qs' onClick={ () => addListComanda( postres[3] ) } variant="contained" size="medium">
                                    {t('lista_platos_categorias.queso')}
                                </Button>

                            </div> 
                    </div>
                </Box>




                          
                <Box sx={{ display: 'flex', '& > *': { m: 1, }, }} >

                        <ButtonGroup className='button_group' orientation="vertical" aria-label="vertical contained button group" variant="contained" >
                                {categorias}
                        </ButtonGroup>
                </Box>
    </div> 

                        
    )
}