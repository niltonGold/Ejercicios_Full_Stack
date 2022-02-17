import express from 'express';
import fs from 'fs/promises';
import { FILE_DATA_PATH, initProvinceData, retrieveProcinces } from './src/data.js';
import { validateProvinceName } from './src/validations.js';



const app = express();
app.use(express.json());


let provincias = [];

let listaProvincias = [];

initProvinceData().then( p => provincias = p );


retrieveProcinces().then( p => listaProvincias = p );
let nom = "Cádiz";
console.log(nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());




app.get('/province', (req, res) => {
    
    res.send(provincias);
});


app.get('/province/:id', (req, res) => {
    const provincia = provincias.find( p => p.id === parseInt(req.params.id) );
    
    res.status( provincia !== undefined ?  200 : 404);

    res.send(provincia);
});



app.post('/province', (req, res)=>{
    const lastId = provincias[provincias.length - 1]?.id ?? 0;

    const provincia = { ...req.body, id: lastId+1 };

    if (!validateProvinceName(listaProvincias, req.body.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) ){
        res.status(400).json( {msg: 'nombre no valido'} );
    }else{

        provincias.push(provincia);

        fs.writeFile(FILE_DATA_PATH, JSON.stringify(provincias));
        res.status(201).json({id: provincia.id});
    }   
    
})

app.listen(1500, () => console.log('provincias de madrid'));
