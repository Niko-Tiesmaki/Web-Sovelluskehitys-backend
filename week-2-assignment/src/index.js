import express from 'express';
import { getItems, getById, addItem } from './items.js';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/items', getItems);

app.post('/items', addItem);

app.get('/items/:id', getById);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
