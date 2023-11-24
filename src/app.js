import express from 'express';
import productRoutes from './routes/productRoutes.js';
import priceRoutes from './routes/priceRoutes.js'

const app = express();

// Configurar middlewares
app.use(express.json());

// Configurar rutas
app.use('/products', productRoutes);
app.use('/price', priceRoutes);

export default app