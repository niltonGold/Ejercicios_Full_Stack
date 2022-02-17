import { createUser } from "./usersBBDD.model.js";


export async function createUserFromPost(req, res){
    const id = await createUser(req.body);
    res.json({id});
}