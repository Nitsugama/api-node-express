import express from 'express';
import getUser from '../controllers/user/getUser.js';
import insertUser from '../controllers/user/insertUser.js';
import updateUser from '../controllers/user/updateUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
import listUser from '../controllers/user/listUser.js';

const router = express.Router();

router.get('/', getUser);
router.post('/', insertUser);
router.put('/', updateUser);
router.delete('/', deleteUser);
router.get('/list', listUser);


export default router