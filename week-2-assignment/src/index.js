import express from 'express';
import cors from "cors"
import { getItems, getById, addItem, updateItem, deleteItem } from './items.js';
import { updateUser, getUsers, getUserById, deleteUser, addUser } from './users.js';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(cors())

app.use('/', express.static('public'));

app.use(express.json());

app.get('/api/items', getItems);

app.post('/api/items', addItem);

app.get('/api/items/:id', getById);

app.put('/api/items/update/:id', updateItem);

app.delete('/api/items/delete/:id', deleteItem);

app.get('/api/users', getUsers);

app.post('/api/users', addUser);

app.get('/api/users/:id', getUserById);

app.put('/api/users/update/:id', updateUser);

app.delete('/api/users/delete/:id', deleteUser);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
