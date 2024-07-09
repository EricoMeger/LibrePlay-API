import {Request, Response} from "express";
import express from "express";

const app = express()

app.get('/status', (req: Request, res: Response) => {
    res.send({status:'API rodando'});
});

export default app