import * as fs from 'fs/promises';


// try {
//     await fs.writeFile('C:/Users/34665/Desktop/hello.txt', 'Escribiendo desde el bootcamp');
//     console.log('Ya esta escribo');
// }catch(err){
//     console.err(err);
// }


try{
    const data = await fs.readFile('../theory-2/4-ficheros-directorios.md', { encoding: 'utf-8'});
    console.log(data.split(' ').map(p => p.toUpperCase()));
}catch(err){
    console.error(err);
}
