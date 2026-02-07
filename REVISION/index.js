// import the express module
const express = require('express');
const app = express();
const PORT =  3000;
// mock data
const users = [
  { id: 1, name: 'Emme', age: 17 },
  { id: 2, name: 'Bob', age: 18 },
    { id: 3, name: 'clarissa', age: 23 },
];
//define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the User API!');
});
//define a route handler to get all users
app.get('/users/:id', (req, res) => {
  res.json(users);
});
//get a user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
// post request to create a new user
app.post('/users', express.json(), (req, res) => {
  const newUser = {
  id: users.length + 1,
  name: req.body.name,
  age: req.body.age
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
//PUT request to update a user
app.put('/users/:id',  (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    const updatedUser = {
     ...user,
     name: req.body.name || user.name,
     age: req.body.age || user.age
    };
   users[users.indexOf(user)] = updatedUser;
   res.json(updatedUser);
    } else {
        res.status(404).json({ error: 'User not found' });
  }   
});
//DELETE request to remove a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
//start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});