import express from 'express';
import deleteProduct from '../controllers/products/deleteProduct.js';
import getProduct from '../controllers/products/getProduct.js';
import insertProduct from '../controllers/products/insertProduct.js';
import updateProduct from '../controllers/products/updateProduct.js';

const router = express.Router();

router.get('/', getProduct);
router.post('/', insertProduct);
router.put('/', updateProduct);
router.delete('/', deleteProduct);

export default router