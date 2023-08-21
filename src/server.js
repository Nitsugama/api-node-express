// const express = require("express");
import express from 'express';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import loginRouter from './routers/loginRouter.js';

const api = express();

api.get('/', (req, res) => {
    res.json({message: "Bem vindoa a nossa API"})
});

api.use('/products', productRouter);
api.use('/user', userRouter);
api.use('/auth', loginRouter,);

api.listen(3000,  (req, res) =>{
    console.log({message: "Servidor subiu na porta 3000. http://localhost:3000"})
});