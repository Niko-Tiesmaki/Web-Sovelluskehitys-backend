import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200);
  res.setHeader('Content-type', 'text/plain')
  res.send('Welcome to my rest api');
});

app.get('/moro', (req, res) => {
  res.status(200);
  res.setHeader('Content-type', 'text/plain')
  res.send('Moro');
});
app.get('/moro/json', (req, res) => {
  const moroJson = {
    title: 'Moro',
    description: 'Moro testin vastaus json formatissa',
  };
  res.status(200);
  res.set('Content-type', 'application/json');
  res.json(moroJson);
});

app.post('/moro', (req, res) => {
  const data = {
    Title: 'dummy data',
    description: 'Test data for json response',
  };
  res.status(201);
  res.set('Content-type', 'application/json');
  res.json(data);
});

app.delete('/moro/:id', (req, res) => {
  if (req.params.id === '99') {
    res.status(204);
    res.setHeader('Content-type', 'text/plain');
    res.send('Content successfully deleted with id: ' + req.params.id);
  } else {
    res.status(404);
    res.setHeader('Content-type', 'text/plain');
    res.send('No content found with id: ' + req.params.id);
  }
});
app.put('/moro/:id', (req, res) => {
  if (req.params.id === '99') {
    res.status(200);
    res.json({
      Title: 'Updated data',
      description: 'Updated data from put request',
    });
  } else {
    res.status(404);
    res.send('No data found with id: ' + req.params.id);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
