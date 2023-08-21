import express from 'express';
import loginAuth from '../controllers/login/loginAuth.js';
import logout from '../controllers/login/logout.js';

const router = express.Router();

router.post('/login', loginAuth);
router.post('/logout', logout);

export default router;