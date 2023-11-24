import express from 'express';
import { getPriceByUserAndProduct } from '../controllers/priceControllers.js';


const router = express.Router();

router.get('/:id/:productName', getPriceByUserAndProduct);

export default router;