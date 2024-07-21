import {Request, Response} from "express";
import express from "express";
import UserRegisterController from "./controller/UserRegisterController";

const userRegisterController = new UserRegisterController()

const app = express()
app.use(express.json())

app.get('/status', (req: Request, res: Response) => {
    res.send({status:'API rodando'});
});

app.post('/cadastrar/usuario', async (req: Request, res: Response) => {
    try {
        let data = req.body
        let result = await userRegisterController.registerUser(data)

        if(result.sucess){
            res.status(200).send(result)
        } else {
            res.status(400).send(result)
        }
    } catch (error){
        res.status(500).send(error)
    }
});

export default app