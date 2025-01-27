import express from 'express';
import { getItems, getById, addItem, updateItem, deleteItem } from './items.js';
import { updateUser, getUsers, getUserById, deleteUser, addUser } from './users.js';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/items', getItems);

app.post('/items', addItem);

app.get('/items/:id', getById);

app.put('/items/update/:id', updateItem);

app.delete('/items/delete/:id', deleteItem);

app.get('/users', getUsers);

app.post('/users', addUser);

app.get('/users/:id', getUserById);

app.put('/users/update/:id', updateUser);

app.delete('/users/delete/:id', deleteUser);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
