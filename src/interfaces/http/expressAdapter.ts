import {Request, Response} from "express";
import express from "express";
import UserRegisterController from "../../controllers/UserRegisterController";
import UserLoginController from "../../controllers/UserLoginController";
import MovieSearchController from "../../controllers/MovieSearchController";

const userRegisterController = new UserRegisterController()
const userLoginController = new UserLoginController()
const movieSearchController = new MovieSearchController()
const cors = require('cors');

const app = express()

app.use(cors())
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

app.post('/login/usuario', async (req: Request, res: Response) => {
    try {
        let data = req.body
        let result = await userLoginController.loginUser(data)

        if(result.sucess){
            res.status(200).send(result)
        } else {
            res.status(400).send(result)
        }
    } catch (error){
        res.status(500).send(error)
    }
});

app.post('/buscar/filme', async (req: Request, res: Response) => {
    try {
        let data = req.body
        let result = await movieSearchController.searchMovie(data)

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