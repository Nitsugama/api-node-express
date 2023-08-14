const express = require("express");

const api = express();

api.get('/', () => {
    res.json({message: "Bem vindoa a nossa API"})
});

api.listen(3000,  () =>{
    console.log({message: "Servidor subiu na porta 3000. http://localhost:3000"})
});