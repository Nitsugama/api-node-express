import express from 'express';

const router = express.Router();

router.get('/user', (req, res) => {
    res.json({message: "get user"})
});

router.post('/user', (req, res) => {
    res.json({message: "Método post"})
});

router.put('/user', (req, res) => {
    res.json({message: "Método put"})
});

router.delete('/user', (req, res) => {
    res.json({message: "Método delete"})
});

export default router;