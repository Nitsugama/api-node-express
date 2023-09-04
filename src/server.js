// const express = require("express");
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import loginRouter from './routers/loginRouter.js';
import {PORT} from './config.js';

const api = express();

// middleware que converte json para objeto req.body
api.use(bodyParser.json())

api.get('/', (req, res) => {
    res.json({message: "Bem vindoa a nossa API"})
});

api.use('/produto', productRouter);
api.use('/user', userRouter);
api.use('/auth', loginRouter,);

api.listen(PORT,  (req, res) =>{
    console.log({message: `Servidor subiu na porta ${PORT}. http://localhost:${PORT}`})
});