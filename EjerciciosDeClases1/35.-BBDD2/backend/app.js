import express from "express";
import usuariosRouter from './src/users/users.router.js'
import usersRouterBBDD from './src/usersBBDD/usersBBDD.router.js';


const app = express();


app.use(express.json());// es un middleware que me permite gestionar los archivos en json


app.use('/users', usuariosRouter);

app.use('/register', usersRouterBBDD );


// const URI  = 'mongodb+srv://nil1:123@miprimercluster.rssse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// const client = new MongoClient(URI);




// async function initUsers(){
//     try{
//         console.log('estoy en el initUsers');
//         await client.connect();

//         const db = client.db('redsocial');

//         const usuarios = db.collection('users');

//         return await usuarios.find().toArray();// obtenemos el array de los documentos de esa collection

//     }catch(err){
//         console.log('error del initUsers');
//         console.log(err);
//     } finally{
//         console.log('cerrando la base de datos desde initUsers');
//         await client.close();//cierro la conexion pase lo que pase
//     }
// }





// app.post('/prueba', upload.single('avatar'), 
//     async function (req, res, next){
//             try{
//                 console.log('entrando en post prueba');
//                 const currentUsers = await initUsers();
//                 console.log('mostrando currenUsers'+currentUsers);
//                 await client.connect();
//                 const db = client.db('redsocial');
//                 const usuarios = db.collection('users');
//                 const lastId = currentUsers[currentUsers.length -1]?.id ?? 0;
//                 const newUser = {...req.body, id: lastId + 1};
//                 await usuarios.insertOne(newUser);
//                 return lastId +1;
        
//             }finally{
//                 console.log('cerrando la bbdd del post prueba');
//                 await client.close();
//             }

//     });







app.listen(3002, () => console.log('Escuchando desde el servidor 3002'));