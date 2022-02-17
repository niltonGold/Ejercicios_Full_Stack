

import express from 'express';
import fs from 'fs/promises';
import { FILE_DATA_PATH, initCurseData } from './src/data.js'; 


const app = express();
app.use(express.json());


let cursos = [];


initCurseData().then( p => cursos = p);

app.get('/cursos', (req, res) => {
    
    res.send(cursos);
});


app.post('/cursos', (req, res)=>{
    const lastId = cursos[cursos.length -1]?.id ?? 0;
    
    const curso = {...req.body, id: lastId+1};

    cursos.push(curso);

    fs.writeFile(FILE_DATA_PATH, JSON.stringify(cursos));
    res.send('hola desde el post');
})


app.listen(1400, () => console.log('cursos mios'));