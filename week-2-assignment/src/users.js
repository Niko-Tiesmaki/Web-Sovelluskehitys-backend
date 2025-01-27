const users = [
  {
    id: 1,
    username: 'johndoe',
    password: 'password1',
    email: 'johndoe@example.com',
  },
  {
    id: 2,
    username: 'janedoe',
    password: 'password2',
    email: 'janedoe@example.com',
  },
  {
    id: 3,
    username: 'bobsmith',
    password: 'password3',
    email: 'bobsmith@example.com',
  },
];
const getUsers = (req, res) => {
  res.status(200);
  res.json(users);
};
const getUserById = (req, res) => {
  console.log('Get user by id of: ' + req.params.id);
  const user = users.find((user) => user.id == req.params.id);
  if (user) {
    res.status(200);
    res.json(user);
  } else {
    res.status(404).json({message: 'no user with id: ' + req.params.id});
  }
};
const addUser = (req, res) => {
  console.log('add user request body: ' + req.body);
  if (req.body.username && req.body.password && req.body.email) {
    const generateId = users[users.length - 1].id;
    const newUser = {
      id: generateId + 1,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };
    users.push(newUser);
    res.status(201);
    res.json({message: 'user added.'});
  } else {
    res.status(400).json({message: 'Missing a property'});
  }
};
const updateUser = (req, res) => {
  console.log('Updating user with id of ' + req.params.id);
  const user = users.find((user) => user.id == req.params.id);
  if (user) {
    if (req.body.username && req.body.password && req.body.email) {
      user.username = req.body.username;
      user.password = req.body.password;
      user.email = req.body.email;
      res.status(200);
      res.json(users);
    } else {
      res.status(400).json({message: 'Missing core properties'});
    }
  } else {
    res.status(404).json({message: 'No user with id: ' + req.params});
  }
};
const deleteUser = (req, res) => {
  console.log('Deleting user with id of ' + req.params.id);
  const id = parseInt(req.params.id, 10);
  const user = users.findIndex((user) => user.id === id);
  if (user > -1) {
    res.status(204);
    users.splice(user, 1);
  } else {
    res.status(404).json({message: 'No user with id: ' + req.params.id});
  }
};

export {getUsers, getUserById, addUser, deleteUser, updateUser};
