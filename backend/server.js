import express from 'express';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes.js';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;
connectDB(); // connect to database mongodb
const app = express();

app.get('/',  (req, res) => {
    res.send('API is running....');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`server is running on ${port}`));
