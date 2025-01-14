import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { generateMockData } from './src/data/mockData.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const { products, categories } = generateMockData();

app.get('/api/products', (req, res) => {
  const productsWithCategories = Array.from(products.values()).map(product => {
    const category = categories.get(product.categoryId);
    return {
      ...product,
      category
    };
  });
  
  res.json(productsWithCategories);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});