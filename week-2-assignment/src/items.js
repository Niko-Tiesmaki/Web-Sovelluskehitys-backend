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
  };
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

export {addItem, getItems, getById};
