const items = [
  {id: 1, name: 'Omena'},
  {id: 2, name: 'Appelsiini'},
  {id: 3, name: 'Porkkana'},
  {id: 4, name: 'Mandariini'},
];

const getItems = (req, res) => {
  res.status(200);
  res.json(items);
};
const getById = (req, res) => {
  console.log('Get item by id: ', req.params.id);
  const item = items.find((item) => item.id == req.params.id);
  if (item) {
    res.status(200);
    res.json(item);
  } else {
    res.status(404).json({message: 'No item with id: ' + req.params.id});
  }
};

const addItem = (req, res) => {
  console.log('add item request body ', req.body);
  if (req.body.name) {
    const generateId = items[items.length - 1].id;
    const newItem = {id: generateId + 1, name: req.body.name};
    items.push(newItem);
    res.status(201);
    res.json({message: 'Item added.'});
  } else {
    res.status(400);
    res.json({message: 'Request is missing name property'});
  }
};
const updateItem = (req, res) => {
  console.log('Updating item with id of ' + req.params.id);
  const item = items.find((item) => item.id == req.params.id);
  if (item) {
    const name = req.body.name;
    item.name = name;
    res.json(items);
  } else {
    res.status(404).json({message: 'No item with id: ' + req.params});
  }
};
const deleteItem = (req, res) => {
  console.log('Deleting item with id of ' + req.params.id);
  const id = parseInt(req.params.id, 10);
  const item = items.findIndex((item) => item.id === id);
  if (item > -1) {
    res.status(204);
    items.splice(item, 1);
  } else {
    res.status(404).json({message: 'No item with id: ' + req.params.id});
  }
};
export {addItem, getItems, getById, updateItem, deleteItem};
